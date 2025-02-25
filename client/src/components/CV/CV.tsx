import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Container, DownloadButton, MainContent, Section } from "./styles";
import LineNumbers from "../line-numbers/LineNumbers";

const CV = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (!ref.current) return;

    const canvas = await html2canvas(ref.current, { scale: 2 }); // Escalado para mejor calidad
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Mi-CV.pdf");
  };

  return (
      <Container
        ref={ref}
      >
        <h1>Yamil Pedroso</h1>
        <h2>Creative Full Stack Developer</h2>

        <h3>"Overview":</h3>
        <p className="overview">
          I'm Yamil, a Full-Stack Developer, passionate about building intuitive
          and efficient digital experiences, I bring 4+ years of expertise in
          React, TypeScript, Redux, and Git, crafting maintainable and scalable
          web applications. My strong computer science background allows me to
          analyze complex problems and deliver optimized solutions. I thrive in
          collaborative environments, working closely with backend engineers,
          UX/UI designers, and DevOps teams to align technical implementations
          with business goals. With a keen eye for performance optimization and
          best practices, I continuously refine my approach, embracing new
          technologies to enhance development workflows and product quality.
        </p>
        <MainContent>
          <Section>
            <h3>"Contact":</h3>
            <div className="content">
              <span className="bracket-set">{"{"}</span>
              <br />
              <span className="text">&nbsp;&nbsp;Nationality: "Cuban",</span>
              <br />
              <span className="text">&nbsp;&nbsp;Resident permit: "C",</span>
              <br />
              <span className="text">&nbsp;&nbsp;Phone: "+41 79 532 65 19",</span>
              <br />
              <span className="text">&nbsp;&nbsp;eMail: "yamilpedroso@gmail.com",</span>
              <br />
              <span className="text">&nbsp;&nbsp;Address: "Kreuzstr. 33, 8008 Zürich",</span>
              <br />
              <span className="bracket-set">{"}"}</span>
            </div>
          </Section>

          <Section>
            <h3>"Education":</h3>
            <span className="bracket-set">{"["}</span>
            <br />
            <div className="content">
              <span className="bracket-set">{"{"}</span>
              <br />
              <span className="text">"2023":</span>
              <br />
              <span className="bracket-set">{"["}</span>
              <br />
              <span className="text">&nbsp;&nbsp;"Frontend Development", </span>
              <br />
              <span className="text">&nbsp;&nbsp;"Brainnest Company (Germany)"</span>
              <br />
              <span className="bracket-set">{"]"}</span>
              <br />
              <span className="bracket-set">{"}"}</span>
            </div>
            <br />
           <span className="bracket-set">{"]"}</span>
          </Section>
        </MainContent>
          <DownloadButton onClick={handleDownload}>Descargar CV en PDF</DownloadButton>
          <LineNumbers />

      </Container>
  );
};

export default CV;
