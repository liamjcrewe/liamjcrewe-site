import Layout from '../components/layout'
import Footer from '../components/footer'
import Headline from '../components/headline'

// we use vh in this component rather than % due to a webkit bug where child
// elements do not properly inherit their parent's min-height value:
// https://bugs.webkit.org/show_bug.cgi?id=26559
export default () => (
  <Layout>
    <div style={{ minHeight: '40vh' }} />
    <Headline /> {/* minHeight: '20vh' */}
    <div style={{ minHeight: '20vh' }} />
    <Footer /> {/* minHeight: '20vh' */}
  </Layout>
)
