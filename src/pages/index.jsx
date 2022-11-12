import {
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

import Seo from "../assets/components/seo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link, navigate } from "gatsby";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import { validateEmail } from "../utils/functions";
import Navbar from "../assets/components/Navbar";
import Video from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

const Index = () => {
  const [data, setData] = useState({});
  const actividades = [
    {
      title: "SALÓN CHOCOLATE",
      content:
        "Todo lo que hay que saber del chocolate reunido en este salón, donde habra conferencias, demo-conferencias y conversatorios impartidos por chefs y personalidades del mundo chocolatero.",
    },
    {
      title: "SALÓN CACAO",
      content:
        "De la vista, el olfato y el sabor nace el conocimiento, en este salón podras conocer los diferentes productos derivados del cacao, de la mano de expertos que te guiarán en el mundo del chocolate.",
    },
    {
      title: "CAVA-CAO",
      content:
        "En este espacio participa de la degustación de chocolates, vinos y quesos, acompañado de la mano de un chef invitado quien te platicará de sus características e ingredientes  al ritmo de musica viva.",
    },
    {
      title: "PROMESAS DEL CACAO",
      content:
        "Conoce a las nuevas promesas de la gastronomía en este salón, Es un espacio destinado para universidades de gastronomía, donde desarrollarán actividades culinarias con platillos hechos con chocolate.",
    },
    {
      title: "CHOCOLATEROS",
      content:
        "El cacao y chocolate de Tabasco presentado en una sala de exhibición donde podras encontrar mas de 120 expositores de cacao y chocolate así como los diferentes productos y servicios turísticos que el Estado ofrece.",
    },
    {
      title: "SABOR A TABASCO",
      content:
        "Tabasco a través de su gastronomía. Disfruta de la cocina autóctona de las culturas Yokot’an, Zoque, Olmeca y Maya a través de sus cocineras tradiciónales y sus platillos prehispánicos hechos en cocina de leña.",
    },
    {
      title: "EXPERIENCIA SENSORIAL",
      content:
        "Disfruta de un espectáculo de imagen, luces y sonido en una experiencia sensorial, a través de un viaje al mundo del cacao del Tabasco prehispánico, conoce los procesos y cómo surgió la bebida ancestral.",
    },
    {
      title: "EXPLORA TABASCO",
      content:
        "Conoce todas las maravillas que Tabasco te ofrece a través de sus 7 Grandes Rutas. En esta área turística encuantra recorridos, exposiciones y tours y todo lo que te ofrecen las agencias de viaje y hoteles de Tabasco.",
    },
    {
      title: "ZONA INFANTIL DIF",
      content:
        "La aventura y la diversión también es para los niños, lleva a tus pequeños a este espacio dedicado a los juegos para el desarrollo de la niñez y las actividades inclusivas que ayudan a la integración social infantil.",
    },
    {
      title: "IFAT",
      content:
        "Conoce todo lo que manos tabasqueñas son capaces de hacer con materiales de la región y disfruta de todos los productos tabasqueños en este espacio dedicado para la promoción de los artesanos del Estado.",
    },
    {
      title: "Sembrando Vida – SEDAFOP  |  Esencia Tabasco – SEDEC",
      content:
        "Espacio destinado para exposición de productos del Programa Sembrando Vida, de los productores tabasqueños en el tema de agroturismo",
    },
    {
      title: "MEDIOS",
      content:
        "Disfruta de transmisiones en vivo y grabaciones de los programas de radio y televición, así como de lives de influencers que estaran en el festival con entrevistas a personalidades distinguidas del ambito chocolatero.",
    },
  ];
  const estados = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Coahuila",
    "Colima",
    "Ciudad de México",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Estado de México",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];

  const chefs = [
    "https://i.ibb.co/Rzpdhrv/AGUSTIN-BUENDIA.png",

    "https://i.ibb.co/MM11y6p/ALFONSO-CASTAN-EDA.png",

    "https://i.ibb.co/7Y1vZm1/ALFREDO-MARTINEZ-ROBLEDO.png",

    "https://i.ibb.co/M8T4M4X/ANA-LAURA-MTZ.png",

    "https://i.ibb.co/prqzXBC/ANA-LEY-SOMMELIER.png",

    "https://i.ibb.co/vcwP5xn/ARMANDO-PRATS.png",

    "https://i.ibb.co/6shk3Y9/CARMEN-BALCAZAR.png",

    "https://i.ibb.co/vmVRRnT/CESAR-AGUILAR.png",

    "https://i.ibb.co/q0mCJtL/CHEFS-BELGICA-MINI-WEB.png",

    "https://i.ibb.co/pJnMdcX/CHRISTIAN-HERRERA-BAJA-CALIF.png",

    "https://i.ibb.co/jhPw85m/DANIELA-MIER-Y-TERAN.png",

    "https://i.ibb.co/wNwzjbm/EFREN-HERNANDEZ.png",

    "https://i.ibb.co/bLjnPNL/ELY-OSORIO.png",

    "https://i.ibb.co/zxTQrX2/FERNANDO-MARRUFO.png",

    "https://i.ibb.co/9NwVpdR/FREDERIC-VACHERON.png",

    "https://i.ibb.co/pLgpRCp/Joel-Torrijos.png",

    "https://i.ibb.co/8MTpHKY/Jorge-Llanderal.png",

    "https://i.ibb.co/JjWXRrd/JORGE-OROZCO.png",

    "https://i.ibb.co/wyL7SWg/Jose-Burela-Picazzo.png",

    "https://i.ibb.co/xqSBgjB/JOSE-LO-PEZ-GANEM.png",

    "https://i.ibb.co/rQqJGfP/Karen-Cordo-n.png",

    "https://i.ibb.co/nnTRsJt/Kwinten-de-Paepe.png",

    "https://i.ibb.co/xGWbPk8/LUCIO-HERNANDEZ.png",

    "https://i.ibb.co/93Rzc8j/LUPITA-VIDAL.png",

    "https://i.ibb.co/Qb5NRpp/MARCELO-HISAKI.png",

    "https://i.ibb.co/Sc7Qh49/Maria-D-Alo.png",

    "https://i.ibb.co/Bny8s4M/MARICEL-PRESILLA.png",

    "https://i.ibb.co/YW3v9cC/MAU-ROMO.png",

    "https://i.ibb.co/qjzfZqJ/Melanie-Lemmens.png",

    "https://i.ibb.co/p4nCj7P/NELLY-CORDOVA.png",

    "https://i.ibb.co/dBPqfwp/Olivier-Wilems.png",

    "https://i.ibb.co/b2CSjXv/Patric-Van-Damme.png",

    "https://i.ibb.co/YP5xyR0/Pieter-Vaes.png",

    "https://i.ibb.co/SKk4Myj/REINA-FLORES.png",

    "https://i.ibb.co/Q8ZDHcB/RUBI-VAZQUEZ.png",

    "https://i.ibb.co/LN1Mz7q/Slawomir-Korczak-Polska.png",

    "https://i.ibb.co/yS5nX06/SOFIA-CORTINA-CMDX.png",

    "https://i.ibb.co/CWjrvVy/Sthephan-Dumon.png",

    "https://i.ibb.co/Wy0HMLg/VERO-CANDELERO.png",
  ];

  const handleSubmit = async () => {
    if (
      !data?.nombre?.trim() ||
      !data?.apellido?.trim() ||
      !data?.telefono?.trim() ||
      !data?.estado ||
      !data?.medio ||
      !data?.mensaje?.trim()
    ) {
      return toast.warning("Favor de llenar todos los campos");
    } else if (!validateEmail(data?.email?.trim())) {
      return toast.info("Revise que el correo electrónico sea valido");
    }

    try {
      await emailjs.send(
        "service_q44o3po",
        "template_o8xpl19",
        {
          name: data?.nombre,
          lastName: data?.lastName,
          tel: data?.telefono,
          email: data?.email,
          estado: data?.estado,
          medio: data?.medio,
          mensaje: data?.mensaje,
        },
        "s8gxbtmds2srypNlQ"
      );

      return toast.success("Su mensaje se ha enviado con éxito.");
    } catch (error) {
      return toast.warning("Ocurrio un error: por favor intente más tarde");
    }
  };

  const ids = [
    "Y1vXQBCmbKc",
    "O5gPuhHo0Pg",
    "_RkPwCZJf80",
    "V3RSEG-XXy0",
    "6ku8esv5rDY",
    "JTT-4gNv-zw",
    "H-QXSg3PZww",
    "SY6sheP2keE",
    "QjAgBVNwod8",
    "nKn6Gg5BWhU",
  ];

  const SPLIDE_OPTIONS_show = {
    video: {
      autoplay: false,
      mute: false,
    },
  };

  const SPLIDE_OPTIONS_thumb = {
    video: {
      autoplay: false,
      mute: true,
    },
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
    isNavigation: true,
  };

  const Videos = ({ ids, big }) => (
    <>
      {ids.map((id, key) => (
        <li
          className="splide__slide"
          data-splide-youtube={`https://www.youtube.com/embed/${id}`}
          key={key}
        >
          <iframe
            width="100%"
            height="650"
            src={`https://www.youtube.com/embed/${id}`}
          ></iframe>
        </li>
      ))}
    </>
  );

  const Images = ({ ids, big }) => (
    <>
      {ids.map((id, key) => (
        <li
          className="splide__slide"
          data-splide-youtube={`https://www.youtube.com/embed/${id}`}
          key={key}
        >
          <img
            src={
              `https://img.youtube.com/vi/${id}/` +
              (big ? "hqdefault.jpg" : "mqdefault.jpg")
            }
            width="100%"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="video thumbnail"
          />
        </li>
      ))}
    </>
  );

  const slider1 = useRef();
  const slider2 = useRef();

  useEffect(() => {
    slider1.current.sync(slider2.current.splide);
  }, [slider1, slider2]);

  return (
    <Container
      maxWidth={false}
      sx={{ padding: "0 !important", margin: "0 !important" }}
    >
      <Seo />
      <Navbar />
      <Grid container direction="column">
        <Grid item width="100%">
          <Splide
            aria-label="My Favorite Images"
            options={{ autoplay: true, speed: 1, type: "loop", perPage: 1 }}
          >
            <SplideSlide>
              <img
                src={require("../assets/images/banner/1.jpg").default}
                width="100%"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={require("../assets/images/banner/2.jpg").default}
                width="100%"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <Link to="/catas">
                <img
                  src={require("../assets/images/banner/3.jpg").default}
                  width="100%"
                  alt="Image 1"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <Link to="/catas">
                <img
                  src={require("../assets/images/banner/4.jpg").default}
                  width="100%"
                  alt="Image 1"
                />
              </Link>
            </SplideSlide>
            <SplideSlide>
              <a href="https://bit.ly/3U2ZQHP">
                <img
                  src={require("../assets/images/banner/5.jpg").default}
                  width="100%"
                  alt="Image 1"
                />
              </a>
            </SplideSlide>
            <SplideSlide>
              <a href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2FConvocatoria%20Fotografi%CC%81a_compressed.pdf?alt=media&token=8ee92f45-0004-4b25-a07a-5d9747104089">
                <img
                  src={require("../assets/images/banner/6.jpg").default}
                  width="100%"
                  alt="Image 1"
                />
              </a>
            </SplideSlide>
            <SplideSlide>
              <a href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2Fconvocatoria%20de%20pintura.pdf?alt=media&token=295dd5b3-7997-48be-87ea-09f949ffc699">
                <img
                  src={require("../assets/images/banner/7.jpg").default}
                  width="100%"
                  alt="Image 1"
                />
              </a>
            </SplideSlide>
          </Splide>
        </Grid>
      </Grid>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h6" py={4} width="100%" textAlign="center">
            CHEFS INVITADOS
          </Typography>
        </Grid>
        <Grid item width="100%">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perPage: 10,
              perMove: 1,
            }}
          >
            {chefs.map((chef, key) => (
              <SplideSlide
                key={key}
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                <img src={chef} width="" alt="Image 1" />
              </SplideSlide>
            ))}
          </Splide>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid container direction="column" py={6} px={4}>
          <Grid
            item
            container
            justifyContent="center"
            spacing={{ xs: 3, md: 0 }}
          >
            <Grid item xs={12} md={6}>
              <Typography fontSize={16} fontWeight="500" color="GrayText">
                Eres cacaotero o chocolatero, participa como expositor y forma
                parte de la experiencia memorable en el 11º Festival del
                Chocolate Tabasco 2022.
              </Typography>
            </Grid>

            {/*  <Grid item xs={4} md={2}>
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate("/request")}
                style={{
                  borderRadius: 5,
                  fontSize: 12,
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                REGISTRO DE EXPOSITOR
              </Button>
            </Grid> */}
            <Grid item xs={4} md={2}>
              <Button
                variant="contained"
                size="small"
                onClick={() => navigate("/status")}
                style={{
                  borderRadius: 5,
                  fontSize: 12,
                  paddingTop: 3,
                  paddingBottom: 3,
                }}
              >
                ESTADO DE REGISTRO
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          py={{ xs: 6, md: 12 }}
          px={{ xs: 4, md: 12 }}
          rowSpacing={4}
        >
          <Grid item xs={12} md={5} pr={{ md: 12 }}>
            <Typography variant="h6" pb={4}>
              FESTIVAL DEL CHOCOLATE
            </Typography>
            <Typography
              variant="body2"
              color="GrayText"
              textAlign="justify"
              lineHeight={1.5}
              fontWeight="500"
            >
              El Festival del Chocolate Tabasco se presenta por primera vez en
              el año 2010 como una alianza estratégica de la iniciativa privada,
              prestadores de servicios y el Gobierno de Tabasco bajo el lema
              “Origen y Sabor” con el objetivo de promover y difundir la
              tradición cacaotera del Estado, su gastronomía y atraer el turismo
              nacional e internacional, llevándose a cabo, en esa ocación en el
              Centro de Convenciones Tabasco 2000.
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/Cx8iZyoXcZI"
                title="11 Festival del Chocolate Tabasco | 11 años de herencia y trascendencia"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" py={6}>
          <Grid item xs={12} pb={6}>
            <Typography variant="h1" color="#6C3F37" textAlign="center">
              5 DIMENSIONES
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={
                require("../assets/images/iconosdecolores/Productores.png")
                  .default
              }
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" fontWeight="bold" textAlign="center">
              PRODUCTORES
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Mejores prácticas</li>
                <li>Incremento de producción.</li>
                <li>Nuevas técnicas.</li>
                <li>Networking </li>
                <li>Producción Orgánica.</li>
                <li>
                  Recuperación del concepto de Selva Domesticada (Agrofloresta).
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={
                require("../assets/images/iconosdecolores/Post-productores.png")
                  .default
              }
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" fontWeight="bold" textAlign="center">
              POST-PRODUCTORES
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Mejores prácticas </li>
                <li>Cacao Grijalva.</li>
                <li>Nuevas técnicas y tecnologías.</li>
                <li>Procesos orgánicos.</li>
                <li>Networking.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={
                require("../assets/images/iconosdecolores/Chocolateros.png")
                  .default
              }
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" fontWeight="bold" textAlign="center">
              CHOCOLATEROS
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Innovación</li>
                <li>Cacao Grijalva.</li>
                <li>Valor de la marca</li>
                <li>Esencia Tabasco.</li>
                <li>Nuevas técnicas y tecnología.</li>
                <li>Networking.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={
                require("../assets/images/iconosdecolores/Gastronomia.png")
                  .default
              }
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" fontWeight="bold" textAlign="center">
              GASTRONOMÍA
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>Nuevos platillos.</li>
                <li>Chef innovadores con reconocimientos.</li>
                <li>
                  Sede de la innovación gastronómica con cacao y chocolate.
                </li>
                <li>Escuelas de gastronomía innovadoras.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={6} md={2} textAlign="center">
            <img
              src={
                require("../assets/images/iconosdecolores/Turismo.png").default
              }
              width="100%"
              style={{ maxWidth: 120 }}
              alt="Image 1"
            />
            <Typography color="#6C3F37" fontWeight="bold" textAlign="center">
              TURISMO
            </Typography>
            <Typography color="GrayText" textAlign="left" fontSize={14}>
              <ul>
                <li>
                  Principal destino turístico del cacao y el chocolate del
                  mundo.
                </li>
                <li>
                  Visitas y experiencias en campo y las haciendas que relacionen
                  a los cinco sentidos en la Ruta del Cacaco al Chocolate.
                </li>
                <li>Networking Producción Orgánica.</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid container maxWidth="lg" spacing={6} textAlign="center" py={10}>
            <Grid item xs={12}>
              <Typography variant="h1" color="#6C3F37" textAlign="center">
                ACTIVIDADES
              </Typography>
            </Grid>
            {actividades.map((item, key) => (
              <Grid item xs={6} md={3} px={1}>
                <img
                  src={require("../assets/images/cacaIco.png").default}
                  width="100%"
                  style={{ maxWidth: 45, marginTop: 10, marginBottom: 10 }}
                  alt="Image 1"
                />
                <Typography variant="h5" color="#6C3F37" mb={4}>
                  {item.title}
                </Typography>

                <Divider />
                <Typography
                  color="GrayText"
                  textAlign="left"
                  fontSize={14}
                  mt={4}
                >
                  {item.content}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container justifyContent="center" py={10} spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h1" color="#6C3F37" textAlign="center">
              HERENCIA Y TRASCENDENCIA
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/OLGPD6zBPpI"
                title="11 Festival del Chocolate Tabasco | Historia del Cacao"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          py={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item container maxWidth="lg">
            <Grid item>
              <Splide
                ref={(slider) => (slider1.current = slider)}
                options={SPLIDE_OPTIONS_show}
                Extensions={{ Video }}
              >
                <Videos ids={ids} big={true} />
              </Splide>
            </Grid>
            <Grid item xs={12}>
              <Splide
                ref={(slider) => (slider2.current = slider)}
                options={SPLIDE_OPTIONS_thumb}
                Extensions={{ Video }}
              >
                <Images ids={ids} big={true} />
              </Splide>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        style={{ backgroundColor: "#6C3F37" }}
        justifyContent="center"
      >
        <Grid container maxWidth="lg" px={{ xs: 6 }} py={8} spacing={4}>
          <Grid item container xs={12} md={6} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" color="white" textAlign="center">
                CONTACTO
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Nombre"
                style={{ backgroundColor: "white", borderRadius: 5 }}
                fullWidth
                value={data?.nombre || ""}
                onChange={(e) => {
                  setData({ ...data, nombre: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Apellido"
                style={{ backgroundColor: "white", borderRadius: 5 }}
                fullWidth
                value={data?.apellido || ""}
                onChange={(e) => {
                  setData({ ...data, apellido: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Teléfono"
                style={{ backgroundColor: "white", borderRadius: 5 }}
                fullWidth
                value={data?.telefono || ""}
                onChange={(e) => {
                  setData({ ...data, telefono: e.target.value });
                }}
                type="tel"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Dirección de correo electrónico"
                style={{ backgroundColor: "white", borderRadius: 5 }}
                fullWidth
                type="email"
                value={data?.email || ""}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{
                  textAlign: "left",
                  backgroundColor: "white",
                  borderRadius: 5,
                }}
                select
                fullWidth
                label="De que ciudad nos contacta"
                color="primary"
                name="estado"
                value={data?.estado || ""}
                onChange={(e) => {
                  setData({ ...data, estado: e.target.value });
                }}
              >
                <MenuItem value="" disabled selected>
                  Seleccione un estado
                </MenuItem>
                {estados.map((estado, key) => (
                  <MenuItem key={key} value={estado}>
                    {estado}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{
                  textAlign: "left",
                  backgroundColor: "white",
                  borderRadius: 5,
                }}
                select
                fullWidth
                label="Como podemos contactarle"
                color="primary"
                name="medio"
                value={data?.medio || ""}
                onChange={(e) => {
                  setData({ ...data, medio: e.target.value });
                }}
              >
                <MenuItem value="" disabled selected>
                  Seleccione un medio
                </MenuItem>
                {["Teléfono", "Whatsapp", "Correo electrónico"].map(
                  (medio, key) => (
                    <MenuItem key={key} value={medio}>
                      {medio}
                    </MenuItem>
                  )
                )}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{
                  textAlign: "left",
                  backgroundColor: "white",
                  borderRadius: 5,
                }}
                id="outlined-textarea"
                label="Mensaje"
                rows={6}
                multiline
                fullWidth
                value={data?.mensaje || ""}
                onChange={(e) => {
                  setData({ ...data, mensaje: e.target.value });
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                style={{
                  borderRadius: 3,
                  color: "white",
                  borderWidth: 2,
                  borderColor: "white",
                }}
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={6}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.3478469010856!2d-92.9670495!3d18.0090535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd7c5ed5e5927%3A0x8dd8cf8efa87ca3a!2sNave%203%2C%20Parque%20Tabasco%2C%2086037%20Villahermosa%2C%20Tab.!5e0!3m2!1ses-419!2smx!4v1665588686191!5m2!1ses-419!2smx"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </Grid>
          <Grid item>
            <Button
              style={{ color: "white", textAlign: "center" }}
              variant="text"
              href="https://firebasestorage.googleapis.com/v0/b/festival-del-chocolate.appspot.com/o/docs%2FAviso%20de%20privacidad_.pdf?alt=media&token=a3687f36-429e-4d8d-b59f-2ba4f8ce88e2"
            >
              Aviso de privacidad
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
