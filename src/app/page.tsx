import MainText from "./components/modules/MaintText";
import Confirmation from "./Pages/Confirmation";
import FullImageText from "./Pages/FullImageText";
import GiftTable from "./Pages/GiftTable";
import PhotosShow from "./Pages/PhotosShow";
import BackgroundSection from "./Pages/Place";
import UploadImages from "./Pages/UploadImages";
import WeddingDate from "./Pages/WeddingDate";
import WeddingRules from "./Pages/WeddingRules";
import WelcomeModalWithMusic from "./Pages/WelcomeModalWithMusic";

export default function Home() {
  return <div>
<WelcomeModalWithMusic></WelcomeModalWithMusic>
    
    <FullImageText></FullImageText>
    
    <WeddingDate></WeddingDate>

    <BackgroundSection />

    <WeddingRules></WeddingRules>

    <GiftTable></GiftTable>
    <PhotosShow></PhotosShow>
    <UploadImages></UploadImages>
    <Confirmation></Confirmation>
     <MainText></MainText>
  </div>
}
