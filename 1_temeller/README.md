# Klasör Yapısı

1. `node_modules`: Bu klasör, projenin bağımlılklarını (3. parti paketler/ kütüphaneler) örneğin React , Bootstrap gibi paketleri içerir. Yeni indirdiğimiz kütüphanein çalışması için gereken kodları buraya kaydeddilir. Bu klasörü elle düzenlemiyoruz . Paket indirde değiştirme işlmlerini komutlar aracılığı ile yapıcaz.

2. `public`: Bu klasör, projenin genele olarak erişlebilir olmasını istediğimiz dosyaları barındırır. Logo'lar resimler iconlar ve html dosyası.

3. `.gitignore`: Bu dosya,git'e yüklenmesini istemedğimiz klasörleri ve dosyları tanımladığımız yer. Örneğin içersinde "nodemodules" yazıyor bu şu anlma gelir `git add .` komutu ile değşikleri git'e kaydermek istediğiniz zaman node modules'ü görmezden gelicek ve pushlandığında githuba gönderilmeyecek.

4. `package.json`: Bu dosya projedeki kullanılan bağımlıkları (kütüphanler) ve sürümşlerini, projeyi çalıştırmak compile etmek için bazı komutları ve yarları içeren json dosyası. Projemizin Kimliği.

5. `package-lock.json`: Bağımlıkların spesifik sürümlerini ve bağımlılıklar arsında ilişkisinin verisini tutar.

6. src: Bu klasör uygulamamızın kaynak kodunu içerir. Projeyi bu klasör içerisnde geliştiririz.

- - App.css / index.css: Stillendirme dosyaları

- - App.js: Varsayılan olarak oluşturulan yemel uygulama bileşeni. Bu dosya içerisnde yazdıklarımız ekrana basılır

- - index.js: React uygulmasının başlangıç noktasıdır. Bu dosya uygulamada oluşturduğumuz sayfa ve bileşenlerin DOM'un içerisine yerleştirildiği yerdir.

# Komutlar

1. `npm i paket_ismi | npm install paket_ismi`: projeyi yeni bir paket dahil etmeye yarar

2. `npm i paket_ismi@4.0.0`: indilecek olan pakedin sürümünü belirleme

3. `npm uninstall paket_ismi`:proje var olan bir pakedi kaldırmaya yarar.

4. `npx create-react-app klasor_ismi`: bir react projesi oluşturur.

5. `npm start`: React projesnin ayağa kaldırmaya yarar. Geliştirici modunda çalışır. Terminalin proje klasöründe olduğundan emin olun.

# Çoklu Renderlama

- Birden fazla elemanı ekrana basmak istediğimiz zaman kullandığımız yapıdır.

- Bir dizi içerisindeki eleman sayısı kadar ekerana basma işlemi yapmak isyiyorsak MAP yöntemi kullanırız.

# Prop (Veri Aktarımı)

- Bir bieleşenden diğerine veri aktarmak iiçn kullandığımız yöntemdir.

- Her zaman üstten aşağıya doğru üstteki bileşen çocuk bileşene doğru bir veri aktarım yönü vardır.

# Koşullu Renderlama (Conditional Rendering)

- Ekrana basılacak olan arayüzün bir koşula göre ekrana gelme durumuna denir.

- - Terneray Operator (? :)
- eğer yazdığımız koşulun else durmu varsa yani koşul gerçekleşmezsede ekrana bir şey yazdırmak isiyorsak bunu kullanırız
