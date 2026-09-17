import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://acikmuhendislik.com',
  integrations: [
    starlight({
      title: 'Açık Mühendislik',
      description: 'Açık kaynak mühendislik yazılımları için öğrencilerin hazırladığı Türkçe video dersler.',
      defaultLocale: 'root',
      locales: { root: { label: 'Türkçe', lang: 'tr' } },
      logo: { src: './src/assets/logo.svg', alt: 'Açık Mühendislik' },
      social: [
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/acikmuhendislik' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Serince/acikmuhendislik.com' },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        // Ders sayfalarında videoyu ve yazar bilgisini içeriğin üstüne otomatik ekler
        MarkdownContent: './src/components/DersIcerik.astro',
        // Aktif dersi sol menüde görünür alana kaydırır
        Sidebar: './src/components/SidebarKaydir.astro',
      },
      sidebar: [
        { label: 'Buradan Başla', slug: 'buradan-basla' },
        {
          label: 'FEM (Sonlu Elemanlar)',
          items: [
            { label: 'PrePoMax', autogenerate: { directory: 'fem/prepomax' } },
            { label: 'FreeCAD FEM', autogenerate: { directory: 'fem/freecad-fem' } },
            { label: 'FreeCAD Burkulma', autogenerate: { directory: 'fem/freecad-burkulma' } },
            { label: 'CalculiX FEM', autogenerate: { directory: 'fem/calculix-fem' } },
            { label: 'Salome-Meca', autogenerate: { directory: 'fem/salome-meca' } },
            { label: 'Yapısal Optimizasyon (FEMbyGEN)', autogenerate: { directory: 'fem/fembygen' } },
            { label: 'OpenRadioss', autogenerate: { directory: 'fem/openradioss' } },
            { label: 'FEniCS', autogenerate: { directory: 'fem/fenics' } },
          ],
        },
        {
          label: 'CFD (Akışkanlar)',
          items: [
            {
              label: 'FreeCAD CFD (CfdOF)',
              items: [
                { label: 'Temel Giriş', autogenerate: { directory: 'cfd/freecad-cfd/temel-giris' } },
                { label: 'Akış Analizleri', autogenerate: { directory: 'cfd/freecad-cfd/akis-analizleri' } },
                { label: 'Termal Analizler', autogenerate: { directory: 'cfd/freecad-cfd/termal-analizler' } },
              ],
            },
            { label: 'HelyxOS CFD', autogenerate: { directory: 'cfd/helyxos-cfd' } },
            { label: 'OpenFOAM (Temel)', autogenerate: { directory: 'cfd/openfoam-temel' } },
          ],
        },
        { label: 'Açık Donanım', autogenerate: { directory: 'acik-donanim' } },
        { label: 'FreeCAD Makro', autogenerate: { directory: 'freecad-makro' } },
        { label: 'Hakkımızda', slug: 'hakkimizda' },
        { label: 'Ders Nasıl Eklenir?', slug: 'katkida-bulun' },
      ],
      editLink: { baseUrl: 'https://github.com/Serince/acikmuhendislik.com/edit/main/' },
      lastUpdated: false,
      pagination: true,
    }),
  ],
});
