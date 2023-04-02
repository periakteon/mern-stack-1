const AuthSchema = require('../models/auth.js');
const dotenv = require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //tüm alanların doldurulup doldurulmadığını kontrol ediyoruz. eğer dolu değilse hata döndürüyoruz
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Lütfen tüm alanları doldurun.' });
    }

    // aynı email adresinin kullanılıp kullanılmadığını kontrol et
    const user = await AuthSchema.findOne({email: email});

    if (user) {
      return res.status(400).json({ message: 'Böyle bir kullanıcı var.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Parola en az 6 karakter olmalı.' });
    }

    if (username.length < 3) {
      return res.status(400).json({ message: 'Kullanıcı adı en az 3 karakter olmalı.' });
    }

    if (username.includes(' ')) {
      return res.status(400).json({ message: 'Kullanıcı adı boşluk içeremez.' });
    }

    // eğer e-mail değilse hata mesajı döndür (aşağıdaki isEmail fonksiyonunu kullandık)
    if (!isEmail(email)) {
      return res.status(400).json({ message: 'Geçersiz e-mail formatı.' });
    }

    const passwordHash = await bcrypt.hash(password, 10); // parolayı hashle
    console.log('password hashed: ', passwordHash);

    const newUser = await AuthSchema.create({
      username: username,
      email: email,
      password: passwordHash,
    });

    const token = jwt.sign( { id: newUser._id }, process.env.JWT_SECRET, {expiresIn: '1h',});

    res.status(200).json({
      newUser,
      token,
    });

    console.log('Yeni kullanıcı başarıyla oluşturuldu: ', newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AuthSchema.findOne({email: email});
    
    if (!user) {
      return res.status(400).json({ message: 'Böyle bir kullanıcı yok.' });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res.status(400).json({ message: 'Parola yanlış.' });
    }

    const token = jwt.sign( { id: user._id }, process.env.JWT_SECRET, {expiresIn: '1h',});

    res.status(200).json({
      message: 'Başarıyla giriş yapıldı.',
      user,
      token,
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// girilen e-mail adresinin gerçekten bir e-mail adresi olup olmadığını kontrol eden bir fonksiyon
// eğer e-mail ise true, değilse false döndürür
function isEmail(emailAdress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
}

module.exports = { register, login };
