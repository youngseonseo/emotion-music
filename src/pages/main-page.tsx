import AppMenu from "../components/app-menu";
import AppMainTitle from "../components/app-main-title";
import AppMainPhotoUpload from "../components/app-main-photo-upload";
import AppMainSubmitButton from "../components/app-main-submit-button";
import AppMainTextArea from "../components/app-main-text-area";

const MainPage = () => {
  return (
    <div>
      <AppMenu />
      <AppMainTitle />
      
      <div className="px-20">
        <AppMainPhotoUpload />
        <AppMainTextArea />
        <AppMainSubmitButton />
      </div>
    </div>
  );
};

export default MainPage;
