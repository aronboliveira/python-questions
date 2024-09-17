import { Metadata } from "next";
import "./styles/globals.scss";
import Script from "next/script";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Questionário Python",
  description: "Este é um questionário relacionado a Python e seus frameworks backend, desenvolvido em Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang='pt-BR' className={poppins.className}>
      <head>
        <link rel='canonical' content='https://python-test-abo.netlify.app/' crossOrigin='anonymous' />
        <link rel='author' href='https://github.com/aronboliveira/' crossOrigin='anonymous' />
        <meta name='author' content='Aron Barbosa de Oliveira' />
        <meta name='publisher' content='Aron Barbosa de Oliveira' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content="Jane Doe's Blog" />
        <meta property='article:author' content='https://github.com/aronboliveira/' />
        <meta property='og:site_name' content='Questionário Python' />
        <meta property='og:description' content={metadata.description ?? ""} />
        <meta property='og:title' content={`Questionário Python`} />
        <meta property='og:locale' content='pt_BR' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:url' content='https://python-test-abo.netlify.app/' />
        <meta name='generator' content='Next.js 14.2.11' />
        <meta
          name='keywords'
          content='Python, Python test, Python development, programming, coding, software development, backend development, Django, Flask, Python frameworks, data analysis, algorithms, coding interview, technical test, programming assessment, Python skills, web development, software engineering, coding challenges, technical interview, developer test, Python interview questions, 
Python, teste Python, desenvolvimento Python, programação, codificação, desenvolvimento de software, desenvolvimento backend, Django, Flask, frameworks Python, análise de dados, algoritmos, entrevista de programação, teste técnico, avaliação de programação, habilidades Python, desenvolvimento web, engenharia de software, desafios de programação, entrevista técnica, teste de desenvolvedor, perguntas de entrevista Python,
Python, prueba de Python, desarrollo de Python, programación, codificación, desarrollo de software, desarrollo backend, Django, Flask, frameworks de Python, análisis de datos, algoritmos, entrevista de programación, prueba técnica, evaluación de programación, habilidades de Python, desarrollo web, ingeniería de software, desafíos de programación, entrevista técnica, prueba para desarrollador, preguntas de entrevista de Python'
        />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH'
          crossOrigin='anonymous'
          id='bsLink'
        />
        <link rel='icon' id='favicon' href='/python.svg' />
      </head>
      <body>
        <noscript>You need Javascript to run this application.</noscript>
        {children}
        <Script
          src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
          integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz'
          crossOrigin='anonymous'
          id='bsScript'
        />
      </body>
    </html>
  );
}
