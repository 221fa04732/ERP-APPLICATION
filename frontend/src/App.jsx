import { Suspense, lazy} from "react";
import { Routes, Route} from "react-router-dom";

//    Header --  Home  --  Footer
import Header from './component/Header'
const Home = lazy(()=> import("./component/Content"))
import Footer from "./component/Footer";



// Examination Page
const ExaminationPage = lazy(() => import("./examination/ExaminationPage"));

const ExamDashboard = lazy(() => import("./examination/ExamDashboard"));




// Admission Page
const AdmissionPage = lazy(()=> import('./admission/AdmissionPage'))



// Event Page
const EventPage = lazy(()=> import('./event/EventPage'))



// Hostel Page
const HostelPage = lazy(()=> import('./hostel/HostelPage'))



// Library Page
const LibraryPage = lazy(()=> import('./library/LibraryPage'))



// Placement Page
const PlacementPage = lazy(()=> import('./placement/PlacementPage'))



// Research Page
const ResearchPage = lazy(()=> import('./research/ResearchPage'))



// Transport Page
const TransportPage = lazy(()=> import('./transport/TransportPage'))




function App() {

  return (<div>
    <Header />
    <Suspense fallback={<>Loading..</>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />

          {/* examination */}
          <Route path="/examinationPage" element={<ExaminationPage />} />
          <Route path="/examdashboard" element={<ExamDashboard />} />




          {/* Admission */}
          <Route path="/admissionPage" element={<AdmissionPage />} />



          {/* Event */}
          <Route path="/eventPage" element={<EventPage />} />




          {/* Hostel */}
          <Route path="/hostelPage" element={<HostelPage />} />




          {/* Library */}
          <Route path="/libraryPage" element={<LibraryPage />} />





          {/* Placement */}
          <Route path="/placementPage" element={<PlacementPage />} />




          {/* Research */}
          <Route path="/researchPage" element={<ResearchPage />} />





          {/* Transport */}
          <Route path="/transportPage" element={<TransportPage />} />



        </Routes>
    </Suspense>
    <Footer />
  </div>)
}

export default App
