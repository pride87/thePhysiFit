import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function generateStaticRoutesPlugin() {
  return {
    name: 'generate-static-routes',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distDir, 'index.html')

      if (!fs.existsSync(indexPath)) return

      const baseHtml = fs.readFileSync(indexPath, 'utf-8')

      const routeMetadata = {
        'locations': {
          title: 'Locations & Service Areas | Home Physiotherapy in Noida, Greater Noida & Ghaziabad | ThePhysiFit',
          desc: 'Explore ThePhysiFit home physiotherapy coverage across Noida Sectors (50, 75, 93A, 104, 137), Greater Noida & Ghaziabad. Certified doorstep care for ₹700. Call 7065411520.',
          canonical: 'https://thephysifit.com/locations/'
        },
        'physiotherapy-at-home-sector-50-noida': {
          title: 'Physiotherapy at Home in Sector 50, Noida | ThePhysiFit',
          desc: 'Certified home physiotherapy in Sector 50, Noida. Doorstep treatment for back pain, knee arthritis, post-op recovery & senior mobility. Call 7065411520.',
          canonical: 'https://thephysifit.com/physiotherapy-at-home-sector-50-noida/'
        },
        'physiotherapy-at-home-sector-75-noida': {
          title: 'Physiotherapy at Home in Sector 75, Noida | ThePhysiFit',
          desc: 'Professional physiotherapy at home in Sector 75, Noida. Fast relief for neck strain, back stiffness, sciatica & sports injuries. Call 7065411520.',
          canonical: 'https://thephysifit.com/physiotherapy-at-home-sector-75-noida/'
        },
        'physiotherapy-at-home-sector-93a-noida': {
          title: 'Physiotherapy at Home in Sector 93A, Noida | ThePhysiFit',
          desc: 'Expert home visit physiotherapy in Sector 93A, Noida Expressway. Specialized care for joint pain, disc issues, senior rehab & post-surgery. Call 7065411520.',
          canonical: 'https://thephysifit.com/physiotherapy-at-home-sector-93a-noida/'
        },
        'physiotherapy-at-home-sector-104-noida': {
          title: 'Physiotherapy at Home in Sector 104, Noida | ThePhysiFit',
          desc: 'Doorstep physiotherapy services in Sector 104, Noida. Personalized therapy for back pain, cervical stiffness, knee rehab & recovery. Call 7065411520.',
          canonical: 'https://thephysifit.com/physiotherapy-at-home-sector-104-noida/'
        },
        'physiotherapy-at-home-sector-137-noida': {
          title: 'Physiotherapy at Home in Sector 137, Noida | ThePhysiFit',
          desc: 'Doorstep physiotherapy at home in Sector 137, Noida Expressway. Expert rehab for desk posture strain, back pain, knee care & senior mobility. Call 7065411520.',
          canonical: 'https://thephysifit.com/physiotherapy-at-home-sector-137-noida/'
        },
        'noida': {
          title: 'Home Physiotherapy in Noida | Doorstep Physiotherapist | ThePhysiFit',
          desc: 'Book certified home physiotherapy in Noida with ThePhysiFit. We provide doorstep physio sessions for back pain, neck pain, knee rehab & post-surgery. Call 7065411520.',
          canonical: 'https://thephysifit.com/noida/'
        },
        'noida/ghaziabad': {
          title: 'Home Physiotherapy in Noida & Ghaziabad | Doorstep Physio | ThePhysiFit',
          desc: 'Book certified home physiotherapy in Noida & Ghaziabad with ThePhysiFit. We provide doorstep physio sessions for back pain, neck pain, knee rehab & post-surgery. Call 7065411520.',
          canonical: 'https://thephysifit.com/noida/ghaziabad/'
        },
        'greater-noida': {
          title: 'Home Physiotherapy in Greater Noida & Extension | ThePhysiFit',
          desc: 'Get doorstep physiotherapy in Greater Noida & Noida Extension for back pain, knee pain, post-op recovery and elderly care. Call 7065411520.',
          canonical: 'https://thephysifit.com/greater-noida/'
        },
        'ghaziabad': {
          title: 'Home Physiotherapy in Ghaziabad | Indirapuram & Vaishali | ThePhysiFit',
          desc: 'Certified home physiotherapy in Ghaziabad, Indirapuram, Vaishali & Vasundhara. Specialized care for back pain, neck pain & senior mobility. Call 7065411520.',
          canonical: 'https://thephysifit.com/ghaziabad/'
        },
        'physiotherapy-at-home': {
          title: 'Physiotherapy at Home in Noida, Greater Noida & Ghaziabad | ThePhysiFit',
          desc: 'Professional physiotherapy at home in Noida, Greater Noida & Ghaziabad. Certified home physiotherapists for pain relief and rehabilitation. Call 7065411520.',
          canonical: 'https://thephysifit.com/physiotherapy-at-home/'
        },
        'back-pain-physiotherapy': {
          title: 'Back Pain Physiotherapy at Home in Noida & Ghaziabad | ThePhysiFit',
          desc: 'Targeted back pain physiotherapy at home in Noida, Greater Noida & Ghaziabad. Relief for lower back pain, disc strain & sciatica. Call 7065411520.',
          canonical: 'https://thephysifit.com/back-pain-physiotherapy/'
        },
        'neck-pain-physiotherapy': {
          title: 'Neck Pain & Cervical Physiotherapy at Home | ThePhysiFit',
          desc: 'Home visit physiotherapy for neck pain, cervical spondylosis & desk posture strain in Noida, Greater Noida & Ghaziabad. Call 7065411520.',
          canonical: 'https://thephysifit.com/neck-pain-physiotherapy/'
        },
        'knee-pain-physiotherapy': {
          title: 'Knee Pain & Osteoarthritis Physiotherapy at Home | ThePhysiFit',
          desc: 'Personalized knee pain and knee replacement rehabilitation at home in Noida, Greater Noida & Ghaziabad. Call 7065411520.',
          canonical: 'https://thephysifit.com/knee-pain-physiotherapy/'
        },
        'sports-injury-physiotherapy': {
          title: 'Sports Injury Physiotherapy at Home | ThePhysiFit',
          desc: 'Sports injury physical therapy and rehabilitation at home in Noida, Greater Noida & Ghaziabad. Sprain, strain & return to sport. Call 7065411520.',
          canonical: 'https://thephysifit.com/sports-injury-physiotherapy/'
        },
        'post-surgery-rehabilitation': {
          title: 'Post-Surgery Rehabilitation at Home | ThePhysiFit',
          desc: 'Guided post-surgical physiotherapy at home in Noida, Greater Noida & Ghaziabad. Joint replacement, fracture & spine rehab. Call 7065411520.',
          canonical: 'https://thephysifit.com/post-surgery-rehabilitation/'
        },
        'elderly-mobility-physiotherapy': {
          title: 'Elderly Mobility & Senior Physiotherapy at Home | ThePhysiFit',
          desc: 'Gentle geriatric physiotherapy at home for senior citizens in Noida, Greater Noida & Ghaziabad. Fall prevention & balance support. Call 7065411520.',
          canonical: 'https://thephysifit.com/elderly-mobility-physiotherapy/'
        },
        'home-visit-physiotherapy': {
          title: 'Home Visit Physiotherapist Near Me | ThePhysiFit',
          desc: 'Certified doorstep home visit physiotherapist in Noida, Greater Noida & Ghaziabad. Professional pain relief and rehabilitation for ₹700. Call 7065411520.',
          canonical: 'https://thephysifit.com/home-visit-physiotherapy/'
        }
      }

      Object.entries(routeMetadata).forEach(([route, meta]) => {
        const routeDir = path.join(distDir, route)
        fs.mkdirSync(routeDir, { recursive: true })

        let customizedHtml = baseHtml
        if (meta.title) {
          customizedHtml = customizedHtml.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
          customizedHtml = customizedHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${meta.title}" />`)
        }
        if (meta.desc) {
          customizedHtml = customizedHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.desc}" />`)
          customizedHtml = customizedHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${meta.desc}" />`)
        }
        if (meta.canonical) {
          customizedHtml = customizedHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${meta.canonical}" />`)
          customizedHtml = customizedHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${meta.canonical}" />`)
        }

        fs.writeFileSync(path.join(routeDir, 'index.html'), customizedHtml, 'utf-8')
      })

      // Ensure 404.html is present in dist
      const public404 = path.resolve(__dirname, 'public', '404.html')
      if (fs.existsSync(public404)) {
        fs.copyFileSync(public404, path.join(distDir, '404.html'))
      } else {
        fs.copyFileSync(indexPath, path.join(distDir, '404.html'))
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss(), generateStaticRoutesPlugin()],
})
