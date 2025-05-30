import { Route, Routes } from "react-router-dom";
import {
  MainPage,
  Mypage,
  RecordsPage,
  SearchPage,
  SignInPage,
  SignUpPage,
  TranslatePage,
  SelfDiagnosisPage,
  SignupSuccessPage,
  NotFoundPage,
  MapPage,
  GuidePage,
  TranslateFinishPage,
} from "@/pages";

import MedicalRecordList from "@/pages/records/medicalrecord-list";
import MedicalRecord from "@/pages/records/medicalrecord";
import MedicalRecordEdit from "@/pages/records/medicalrecord-edit";
import HealthStatus from "@/pages/records/healthstatus";
import MedicalRecordAdd from "@/pages/records/medicalrecord-add";
import HealthStatusEdit from "@/pages/records/healthstatus-edit";
import { AuthGuard, RedirectIfAuth } from "@/app/providers";
import TestPage from "@/pages/test/test";
import SearchDetailPage from "@/pages/search/search-detail";
import EditProfile from "@/pages/mypage/edit-profile";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 회원가입, 로그인 */}
      <Route element={<RedirectIfAuth />}>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-up/success" element={<SignupSuccessPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Route>

      <Route element={<AuthGuard />}>
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />} />

        {/* 자가진단 페이지 */}
        <Route path="/self-diagnosis" element={<SelfDiagnosisPage />} />

        <Route path="guide" element={<GuidePage />} />

        {/* 검색 페이지 */}
        <Route path="/search" element={<SearchPage />} />

        {/* 기록 페이지 */}
        <Route path="/records" element={<RecordsPage />} />
        <Route
          path="/records/medicalrecord-list"
          element={<MedicalRecordList />}
        />
        <Route path="/records/medicalrecord/:id" element={<MedicalRecord />} />
        <Route
          path="/records/medicalrecord-edit/:id"
          element={<MedicalRecordEdit />}
        />
        <Route path="/records/healthstatus" element={<HealthStatus />} />
        <Route
          path="/records/medicalrecord-add"
          element={<MedicalRecordAdd />}
        />
        <Route
          path="/records/healthstatus-edit"
          element={<HealthStatusEdit />}
        />

        <Route path="/search/:id" element={<SearchDetailPage />} />

        {/* 지도 페이지 */}
        <Route path="/map" element={<MapPage />} />

        <Route path="/records" element={<RecordsPage />} />
        <Route
          path="/records/medicalrecord-list"
          element={<MedicalRecordList />}
        />
        <Route path="/records/medicalrecord" element={<MedicalRecord />} />
        <Route path="/records/healthstatus" element={<HealthStatus />} />
        <Route
          path="/records/medicalrecord-add"
          element={<MedicalRecordAdd />}
        />

        {/* 통역 페이지 */}
        <Route path="/translate" element={<TranslatePage />} />
        <Route path="/translate/finish" element={<TranslateFinishPage />} />

        {/* 마이 페이지 */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mypage/edit-profile" element={<EditProfile />} />

        {/* 테스트 페이지 */}
        <Route path="/test" element={<TestPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
