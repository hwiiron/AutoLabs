import Container from "@/components/Layout/Container";
import Header from "@/components/Layout/Header";

function TextPage() {
  return (
    <>
      <Header />

      <Container>
        <div className="border w-[80vw] h-[80vh] overflow-hidden">
          <iframe src="/three/text.html" className="size-full" />
        </div>
      </Container>
    </>
  );
}

export default TextPage;
