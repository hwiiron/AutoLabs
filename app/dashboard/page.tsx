"use client";

import ColorInspector from "@/components/Dashboard/ColorInspector";
import DeviceStatus from "@/components/Dashboard/DeviceStatus";
import FabricInfo from "@/components/Dashboard/FabricInfo";
import InspectionSummary from "@/components/Dashboard/InspectionSummary";
import TotalDefectRate from "@/components/Dashboard/TotalDefectRate";
import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";

function DashBoardPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <DeviceStatus
            title="기기 상태"
            description="현재 기기 동작 상태를 제공"
          />

          <FabricInfo title="원단 정보" description="원단의 기본 정보를 제공" />

          <TotalDefectRate title="전체 결함률" description="1.23" />

          <ColorInspector
            title="색상 정밀 검사"
            description="광원의 종류별 손실률을 제공"
          />
        </div>

        <InspectionSummary
          title="원단 결점 위치"
          description="원단에서 발생한 염색 결정의 위치"
        />
      </Container>
    </>
  );
}

export default DashBoardPage;
