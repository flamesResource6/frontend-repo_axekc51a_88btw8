import React from 'react'
import { IdCard, Sprout, Home, Users, Briefcase, Menu } from 'lucide-react'

function App() {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'biodata', label: 'Biodata', icon: IdCard },
    { id: 'myself', label: 'My Self', icon: Sprout },
    { id: 'family', label: 'My Family', icon: Users },
    { id: 'clique', label: 'My Clique', icon: Users },
    { id: 'career', label: 'My Career', icon: Briefcase },
  ]

  const [open, setOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-rose-50 text-slate-800">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 to-rose-500" />
            <span className="font-semibold tracking-tight">Abri · Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-500" />
                {label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-black/5">
            <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-2 gap-2">
              {navItems.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-widest text-xs text-slate-500 mb-3">MY PORTFOLIO</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Abri — INTJ yang fokus pada makna, disiplin, dan kontribusi.
              </h1>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Portofolio pribadi yang merangkum perjalanan diri, nilai hidup, dan arah karier.
                Dirancang minimalis, rapi, dan tenang — sesuai karakter INTJ.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge>Keamanan</Badge>
                <Badge>Kesehatan Fisik</Badge>
                <Badge>Kemandirian Finansial</Badge>
                <Badge>Karier Bermakna</Badge>
              </div>
            </div>
            <Card className="md:justify-self-end">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-md bg-gradient-to-tr from-indigo-500 to-rose-500" />
                  <div>
                    <div className="font-semibold">Abri</div>
                    <div className="text-xs text-slate-500">INTJ • 19 tahun</div>
                  </div>
                </div>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <Item label="Nama Lengkap" value="Abri" />
                  <Item label="Usia" value="19 tahun" />
                  <Item label="TTL" value="Bulucenrana, 31 Maret 2005" />
                  <Item label="Program Studi" value="Psikologi" />
                  <Item label="Jenis Kelamin" value="Laki-laki" />
                  <Item label="Kepribadian" value="INTJ (The Architect)" />
                  <Item label="Nilai Hidup Utama" value="Keamanan, Kesehatan Fisik, Kemandirian Finansial, Karier Bermakna" />
                  <Item label="Bakat" value="Melukis (ekspresi diri melalui visual)" />
                  <Item label="Cita-cita" value="Menjadi profesional di bidang psikologi" />
                  <Item label="Dosen PA" value="DR. H. Muh. Daud, M. Si" />
                </dl>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Biodata */}
      <section id="biodata" className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle icon={IdCard} title="Biodata" subtitle="Ringkasan data diri" />
        <Card>
          <div className="p-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Item label="Nama Lengkap" value="Abri" />
              <Item label="Usia" value="19 tahun" />
              <Item label="TTL" value="Bulucenrana, 31 Maret 2005" />
              <Item label="Program Studi" value="Psikologi" />
              <Item label="Jenis Kelamin" value="Laki-laki" />
              <Item label="Kepribadian" value="INTJ (The Architect)" />
              <Item label="Nilai Hidup Utama" value="Keamanan, Kesehatan Fisik, Kemandirian Finansial, Karier Bermakna" />
              <Item label="Bakat" value="Melukis (ekspresi diri melalui visual)" />
              <Item label="Cita-cita" value="Menjadi profesional di bidang psikologi" />
              <Item label="Dosen Pembimbing Akademik (PA)" value="DR. H. Muh. Daud, M. Si" />
            </dl>
          </div>
        </Card>
      </section>

      {/* My Self */}
      <section id="myself" className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle icon={Sprout} title="My Self" subtitle="Refleksi diri dan nilai hidup" />
        <Card>
          <div className="p-6 space-y-5 leading-relaxed text-slate-700">
            <Quote>
              "Siapa aku, di balik diam, di balik kata 'iya', di balik harapan orang lain?"
            </Quote>
            <p>
              Saya adalah seorang introvert INTJ dengan skor Conscientiousness (29) dan Agreeableness (23) menurut Big Five. Artinya, saya teratur, bertanggung jawab, peduli pada orang lain, tapi juga terlalu sering mengatakan "iya" padahal ingin menolak, karena takut mengecewakan.
            </p>
            <p>
              Saya mudah menangkap ide abstrak, suka belajar (terutama Matematika). Saya percaya diri dalam problem solving, namun mengakui bahwa kreativitas masih menjadi area lemah—yang kini sedang saya latih lewat kelima indra: mengamati warna, merasakan tekstur, mendengar nuansa, dan merefleksikan pengalaman secara sensorik.
            </p>
            <p>
              Nilai-nilai saya stabil: keamanan, kesehatan, kemandirian finansial, dan karier bermakna. Saya ingin hidup yang tidak hanya sukses, tapi juga bermanfaat bagi orang lain.
            </p>
            <div>
              <div className="font-semibold mb-2">Yang saya pelajari dari refleksi diri:</div>
              <Callout>
                Aku bukan harus sempurna, aku hanya perlu jujur pada kebutuhanku sendiri.
              </Callout>
            </div>
            <div>
              <div className="font-semibold mb-2">Area Pengembangan:</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Kemampuan berbahasa Inggris</li>
                <li>Asertivitas dalam komunikasi</li>
                <li>Kreativitas melalui eksplorasi indra</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Family */}
      <section id="family" className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle icon={Users} title="My Family" subtitle="Akar kekuatan dan pelajaran hidup" />
        <Card>
          <div className="p-6 space-y-5 leading-relaxed text-slate-700">
            <Quote>
              "Rumah bukan hanya tempat, tapi fondasi yang membentukku."
            </Quote>
            <p>
              Keluarga saya adalah akar kekuatanku, sekaligus sumber tekanan halus yang saya rasakan sejak kecil. Saya dilihat sebagai "harapan masa depan" yaitu seseorang yang kelak akan membawa perubahan. Ini membentuk keyakinan bahwa saya harus bisa diandalkan, tidak boleh mengecewakan, dan menyelesaikan segalanya sendiri.
            </p>
            <p>
              Meski mereka tidak sering mengungkapkan cinta lewat kata-kata, saya merasakannya dalam tindakan: doa sebelum ujian, makanan favorit saat saya lelah, atau pertanyaan kecil lewat saudara. Mereka tidak memaksakan impian, tapi percaya bahwa saya punya kemampuan mendengarkan dan mengajar.
            </p>
            <div>
              <div className="font-semibold mb-2">Dari keluarga, saya belajar:</div>
              <Callout>
                Tanggung jawab itu penting, tapi merawat diri sendiri juga bukan egois.
              </Callout>
            </div>
            <div>
              <div className="font-semibold mb-2">Refleksi Penting:</div>
              <p>
                Saya sedang belajar memisahkan harapan keluarga dari keinginan pribadi, bukan untuk menolak mereka, tapi untuk memastikan bahwa saya tumbuh untuk diri sendiri, bukan hanya demi memenuhi bayangan mereka.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Clique */}
      <section id="clique" className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle icon={Users} title="My Clique" subtitle="Lingkaran kecil yang hangat dan jujur" />
        <Card>
          <div className="p-6 space-y-5 leading-relaxed text-slate-700">
            <Quote>
              "Teman bukan soal banyak, tapi soal seberapa nyaman diam bersama."
            </Quote>
            <p>
              Saya tidak memiliki banyak teman. Tapi dalam lingkaran kecilku, saya dikenal sebagai pendengar yang baik, teman kerja tim yang bisa diandalkan, dan seseorang yang terbuka terhadap umpan balik.
            </p>
            <p>
              Namun, saya dulu sering menghindari konflik demi menjaga kedamaian. Kini, saya belajar: <strong>Konflik yang dihadapi dengan jujur justru memperkuat kepercayaan.</strong>
            </p>
            <div>
              <div className="font-semibold mb-2">Saya menerapkan active listening dalam komunikasi:</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Merefleksikan perasaan (“Kamu frustrasi karena merasa tidak benar-benar diberi kebebasan?”)</li>
                <li>Mengajukan pertanyaan terbuka (“Apa yang paling ingin kamu ubah dari situasi ini?”)</li>
                <li>Tidak buru-buru bercerita tentang diriku sendiri</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Lingkaran ideal saya terdiri dari orang-orang yang:</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Saling mendukung tanpa menjatuhkan</li>
                <li>Nyaman dengan diam</li>
                <li>Jujur tapi empatik</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Career */}
      <section id="career" className="max-w-6xl mx-auto px-4 py-14">
        <SectionTitle icon={Briefcase} title="My Career" subtitle="Arah kontribusi dan rencana ke depan" />
        <Card>
          <div className="p-6 space-y-5 leading-relaxed text-slate-700">
            <Quote>
              "Karier bukan hanya pekerjaan, tapi cara aku berkontribusi pada dunia."
            </Quote>
            <p>
              Setelah lulus, saya mempertimbangkan dua jalur utama:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Bekerja di bidang psikologi (misalnya sebagai konselor sekolah atau HRD)</li>
              <li>Melanjutkan S2 untuk memperdalam ilmu dan membuka peluang profesional lebih luas</li>
            </ol>
            <p>
              Saya percaya bahwa pendidikan adalah jalan untuk memberdayakan orang lain dan itu sejalan dengan nilai dan mimpi saya menjadi guru atau psikolog.
            </p>
            <p>
              Namun, saya sadar: <strong>Tanpa penguasaan bahasa Inggris dan kemampuan bersosialisasi yang baik, peluang karier global akan tertutup.</strong>
            </p>
            <div>
              <div className="font-semibold mb-2">Dua langkah utama saya:</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Meningkatkan kemampuan bahasa Inggris (latihan harian, kursus, komunitas)</li>
                <li>Mengikuti proyek kolaboratif untuk melatih komunikasi profesional</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Abri. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-indigo-500 to-rose-500" />
            Dibuat dengan fokus, ketenangan, dan rasa ingin tahu.
          </p>
        </div>
      </footer>
    </div>
  )
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
        <Icon className="w-4 h-4 text-indigo-500" />
        <span>{title.toUpperCase()}</span>
      </div>
      <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-slate-500">{subtitle}</p>
    </div>
  )
}

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-black/5 bg-white/80 backdrop-blur shadow-sm hover:shadow-md transition ${className}`}>
      {children}
    </div>
  )
}

function Badge({ children }) {
  return (
    <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-black/5">
      {children}
    </span>
  )
}

function Item({ label, value }) {
  return (
    <div className="p-3 rounded-lg bg-slate-50 border border-black/5">
      <dt className="text-[11px] uppercase tracking-wider text-slate-500">{label}</dt>
      <dd className="text-slate-800 font-medium">{value}</dd>
    </div>
  )
}

function Quote({ children }) {
  return (
    <div className="border-l-4 border-indigo-400 pl-4 italic text-slate-700">{children}</div>
  )
}

function Callout({ children }) {
  return (
    <div className="rounded-md bg-gradient-to-r from-indigo-50 to-rose-50 border border-indigo-100 text-slate-800 px-3 py-2">{children}</div>
  )
}

export default App
