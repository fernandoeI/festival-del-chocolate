import {
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Fest from "../assets/components/Fest";
import Seo from "../assets/components/seo";

const Tours = () => {
  const matches = useMediaQuery("(min-width: 900px)");

  const buttons = [
    {
      name: "1er. Festival",
      text: "El primer festival del chocolate surge en el año 2010 bajo el concepto “Origen y Sabor”, con el objetivo de difundir la tradición y gastronomía del Estado, y posicionarlo como un producto agro-turístico. En esta edición el festival contó con la colaboración de casas comerciales chocolateras, haciendas cacaoteras; así como la participación de reconocidos chocolateros y especialistas locales y nacionales que impartieron talleres, conferencias y exposiciones relacionadas con la producción, comercialización y servicios del cacao y chocolate. Este evento se consideró la arena apropiada para promover y buscar el reconocimiento internacional del cacao criollo originario de la entidad. Todo ello con la expectativa de que en corto plazo el festival se consolidara por su calidad, como punto estratégico del producto y del destino. La sede del primer evento fue el centro de convenciones de la ciudad de Villahermosa, capital de Tabasco, y como subsede a la ciudad de Comalcalco, zona cacaotera.",
      image: "https://i.ibb.co/p1yqx4M/1-FdC.jpg",
    },
    {
      name: "2° Festival",
      text: "La segunda edición se presentó bajo el lema “sabor del tiempo”, el cual se enriqueció al tener mayor participación de empresarios, prestadores de servicios, Chef pasteleros, Chocolatiers, mayor cantidad de actividades como talleres de grabado de chocolate dirigido a niños, catas, maridajes, conferencias impartidas por especialistas nacionales e internacionales, elaboración de chocolatería fina, excursiones culturales en Villahermosa y recorridos turísticos en la Gran Ruta del Cacao , en Comalcalco y por supuesto exposición de empresas del sector. Nuevamente la sede fue el centro de convenciones de la ciudad de Villahermosa.",
      image: "https://i.ibb.co/hFDyxCk/2-FdC.jpg",
    },
    {
      name: "3er. Festival",
      text: "La tercera edición se conceptualizó bajo el lema 'Legado Maya', A razón del vaticinio del calendario Maya sobre el fin del mundo, donde refrendó su calidad e innovó con una serie de actividades que añadieron valor al evento. Es relevante mencionar la exposición y venta de productos elaborados a base de cacao y chocolate, conferencias y talleres por parte de especialistas de las universidades locales y expertos Chocolatiers nacionales e internacionales. Esta vez se contó con la participación de 40 expositores. La sede fue nuevamente en el Centro de Convenciones Tabasco 2000 de la ciudad de Villahermosa.",
      image: "https://i.ibb.co/mCRYQM0/3-FdC.jpg",
    },
    {
      name: "4° Festival",
      text: "El Festival del Chocolate generó tal demanda de visitantes que en la cuarta edición cambió su sede al Parque Tabasco de Villahermosa, ampliando el concepto y añadiendo otras actividades con respecto años anteriores. En esta ocasión participaron 72 expositores. El festival dio inicio en Comalcalco con actividades en la Zona Arqueológica y en la Hacienda La Luz. Se invitaron chefs de prestigio nacional e internacional como los mexicanos Aquiles Chávez, José Ramón Castillo, Benito y Solange, Zahi Téllez, Paulina Abascal, Manny Muñoz; las guatemaltecas Miercymi Molíviatis; la colombiana Margarita Bernal y Claudia Saldarriaga; de Argentina Mauricio Asta y Narda Lepez; de Chile Matías Palomo; de Venezuela Omar Periney; de España Xano Zaguer. Todas estas personalidades que dictaron conferencias magistrales sobre temas del chocolate, dieron un valor especial y añadieron calidad al evento. Una de las mayores innovaciones fue la inclusión del mercado del trueque, rememorando el uso del cacao como moneda, tal como lo hicieron los Olmecas, Mayas y Aztecas. En el mercado del trueque, los asistentes adquirieron bolsas con cacao a cambio de entregar residuos como vidrio, papel ,cartón y latas de aluminio reciclables. También se contó con el Banco del Cacao de Tabasco, donde las personas podían encontrar productos alimenticios, canasta básica, cafeterías, restaurantes y souvenirs",
      image: "https://i.ibb.co/yND6wjJ/4-FdC.jpg",
    },
    {
      name: "5° Festival",
      text: "El 5º Festival del Chocolate Tabasco realizado en el 2014,acentúa la peculiaridad del evento, conserva el formato y las actividades que lo han distinguido en las anteriores ediciones, pero se diferencia por las innovaciones en actividades que involucran a los residentes de Tabasco en la generación y divulgación del conocimiento como las del concurso de fotografía, concurso gastronómico estudiantil, concursos de dibujo infantil “Tabasco con sabor a chocolate”, en esta edición se añadieron conceptos tradicionales de la cultura del chocolate en Tabasco a la imagen publicitaria. Se refrenda la participación de expositores de Campeche, Chiapas, Yucatán, Estado de México, Distrito Federal (hoy Ciudad de México). Por primera vez se tuvo un país invitado que fue Venezuela como parte del programa. Hubieron muestras gastronómica, actividades deportivas y una nueva actividad denominada “Domingo Familiar Venezolano”.  Se mantuvo el formato de conferencias magistrales, demo-conferencias y talleres entre otros. Como invitados especiales estuvieron los prestigiados Chefs nacionales e internacionales  Mauricio Romo, Aquiles Chávez, Ernesto Aguilera, Ricardo Muñoz Zurita, Lupita Vidal, Vidal Elias y Gaby Ruiz. Otros destacados conferencista son Eduardo Da Silva, Paulina Abascal, Luis Robledo, Ismael Montero, Abel Hernández, Héctor Galván, Pedro Evia; los venezolanos Sumito Estévez y Omar Pereney, y Abigaíl Mendoza y los grupos de cocineros de humo, de Maíz y Maya. También se contó con galería de arte, exposición interactiva, montaje de restaurante gourmet, entretenimiento cultural y conciertos musicales",
      image: "https://i.ibb.co/jGpMD02/5-FdC.jpg",
    },
    {
      name: "6° Festival",
      text: "Durante la edición 6, el mensaje que proyectamos fue la identidad que el cacao y chocolate nos brinda a los tabasqueños, teniendo como lema “Del Edén para el mundo”. Conservamos la temática de Conferencias, Exposiciones, Talleres, Catas, Cenas-Maridajes, Banco del Cacao, Concursos de dibujo infantil y de fotografía y el Mercado del Trueque; pero además incluimos actividades entorno al evento como fue la participación de Rocío Banquells, y los standuperos y comediantes René Franco, El Diablito y Hugo Pérez, el Cojo Feliz; y la exposición “Ciencia con Sabor a Chocolate” por parte de la UNAM, el pabellón de artesanías y como Perú como país invitado. Durante este año se lanzaron políticas públicas que fortalecerían la gastronomía típica como es el cacao y el chocolate, sus distintas etapas productivas y comercialización en mercados nacionales e internacionales. Se contó con la participación de especialistas de renombre en la materia como el Chef Chocolatier José Ramón Castillo, el Chef Panadero Eduardo Da Silva, la Catadora de Chocolates a nivel Internacional Valentine Tibere de Francia, la Evaluadora de Chocolates Sophie Vanderbecken de Bélgica, entre otros. Se conservó la sede en el Parque Tabasco en la Nave 1 y 2 en Villahermosa.",
      image: "https://i.ibb.co/990zxJr/6-FdC.jpg",
    },
    {
      name: "7° Festival",
      text: "En la séptima edición, la imagen se refrescó resaltando el valor del cacao tabasqueño el cual recibió la distinción de “Denominación de Origen: Cacao Grijalva”. De igual forma se mantuvo el formato de conferencias, talleres, catas, banco del cacao, concurso de dibujo y fotografía y por supuesto la exposición y venta de productos 100% a base de cacao y chocolate como protagonistas del evento; pero también se llevaron a cabo el 1er. Concurso de Cocina Tradicional Tabasqueña y el Concurso Gastronómico Estudiantil. Como referentes de prestigio en la materia, se contó con la participación estelar del Mejor Chocolatero del Mundo en 2010, el francés Stephane Bonnat, una vez más con la participación del Chef Chocolatier José Ramón Castillo el 12° Mejor Chocolatero y el Ing. Alejandro Campos Beltrán de Chocolates Wolter por la Medalla de Bronce en el International Chocolate Awards., los Chef Idaly Farfán de Colombia, la Chef Internacional Mariela Manzano de Baja California del cuál fue el 1er. estado invitado al evento; el Chef Panadero Eduardo Da Silva de México y los Chefs Beverly Ramos y Chava Riquer, entre otros. Como parte del rescate de la Cocina Tradicional del Tabasco, se mostró al mundo el trabajo incansable de las Embajadoras del Cacao, encabezadas por la Sra. Estela Lázaro. Durante esta edición en el año 2016, y como parte de la innovación en materia de promoción se contó con la participación de Travel Influencers en donde se llevó a cabo un foro en el marco del festival; además se lanzaron 2 App’s para móvil con el uso de tecnología con Qr’s: “Las Aventuras de Cacaito” y “ChocoQuest”. Se conservó la sede en el Parque Tabasco en la Nave 1 y 2 en Villahermosa. En 2016 Colombia fue el país invitado",
      image: "https://i.ibb.co/JKpKQpk/7-FdC.jpg",
    },
    {
      name: "8° Festival",
      text: "En el año 2017 se celebró la edición 8 del Festival donde los tabasqueños una vez más mostramos al mundo el orgullo por nuestro cacao y chocolates de calidad y del más fino aroma y sabor, por ello la campaña se identificó con los bombones ganadores de mezcal y tequila en el International Chocolate Awards de ese año, de la Chocolatera Wolter de la Hacienda Cacaotera La Luz. El país invitado fue la República Checa y Campeche como estado invitado. Se continúa manteniendo el formato de exposición y venta de productos a base de cacao y chocolate, conferencias, talleres, catas, cocina tradicional en la Avenida Tabasqueña, concursos de dibujo infantil, de fotografía, gastronómico estudiantil, pabellón artesanal y más. Entre los expertos en la materia, estuvieron los Chefs reconocidos José Ramón Castillo, y se le dio realce a los Chefs y Chocolateros locales como Alfonso Castañeda, Mauricio Romo, Estela Lázaro, Tía Tana, Gerardo Murillo, Ampáro Torres, entre otros. En diciembre de ese año, por primera vez, Tabasco sería sede ATMEX Adventure Travel Network, el evento de turismo de aventura más importante de México y Latinoamérica, por lo que en el evento se dio un preámbulo. La sede de igual forma continuó siendo el Parque Tabasco, pero únicamente en la Nave 2",
      image: "https://i.ibb.co/ZL6pgcT/8-FdC.jpg",
    },
    {
      name: "9° Festival",
      text: "La novena edición del Festival sucedió en el año 2018, nuevamente mostrando lo que el Edén ofrece al mundo con una paleta de colores a tonos pastel, considerando el Pantone del Año Ultraviolet, pero teniendo como eje rector elementos de identidad de Tabasco. Se continúo con el formato de exposición y venta de productos a base de cacao y chocolate, conferencias, talleres, catas, banco del cacao, cocina tradicional, concursos de dibujo infantil, de fotografía, gastronómico estudiantil, pabellón artesanal y más. Entre los expertos de renombre estuvieron la Chef Repostera Paulina Abascal, el Chocolatier José Ramón Castillo, el Chef Christian Martínez, la Chocolatier y catadora Sophie Vanderbecken, y Chef locales como Alfonso Castañeda, Maurcio  Romo, Amparo Torres; y como tema de ecología y su conservación nos acompañó la Lic. Vianey Pérez de Rosique con su programa Sábado en Verde. Como es tradición la sede fue en el Parque Tabasco en la Nave 1 y 2",
      image: "https://i.ibb.co/f9k4srs/9-FdC.jpg",
    },
    {
      name: "10° Festival",
      text: "El Festival del Chocolate se convirtió en un evento ancla para la economía del estado que promueve la tradición, la gastronomía y el turismo, considerando como eje temático la semilla del cacao criollo originario de Tabasco y el chocolate local, con un enfoque desde diferentes dimensiones: cultural, antropológica, histórica, social y económica, a través de la organización de un festival original que con calidad, eficiencia y rentabilidad,que impulse el posicionamiento estratégico del producto y del destino. Por ello en 2019, se celebró la edición número 10 donde la imagen se focalizó en el “Cacao y Chocolate como Riqueza de Tabasco”, en ese sentido se reordenaron los ejes rectores del evento donde el cacao y el chocolate fueron los protagonistas, se logró posicionar a Tabasco y a su historia del cacao en el mundo, propiciamos el comercio justo del cacao y el chocolate, gestionamos el conocimiento para la cadena de valor y para los estudiantes vinculados, logramos atraer turismo y generar desarrollo turístico y gastronómico, motivamos la derrama económica en lo general, todo bajo 5 grandes dimensiones: Productores, Post Productores, Chocolateros, Gastronomía y Turismo. Entre los expertos en la materia nos acompañaron la Chef Pastelera Paulina Abascal y el Chef español David Castro. En esta edición se llevó a cabo en el Parque Tabasco con la variante de que se reubicó a la Nave 3 con una afluencia de 90,000 visitantes",
      image: "https://i.ibb.co/8MfgWBB/10-FdC.jpg",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [buttonSelected, setButtonSelected] = useState(buttons[0]);

  const handleShowFest = (button) => {
    setLoading(true);
    setButtonSelected(button);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <Container
      maxWidth={false}
      sx={{ padding: "0 !important", margin: "0 !important" }}
    >
      <Seo />

      <div
        style={{
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require("../assets/images/navbar.jpeg").default}
          width="100%"
          style={{ maxHeight: 100, objectFit: "cover" }}
          alt="Image 1"
        />
        <Typography
          fontSize={{ xs: 28, md: 48 }}
          style={{
            position: "absolute",
            top: 10,
            zIndex: 99,
            color: "#6C3F37",
            textAlign: "center",
            width: "100%",
          }}
        >
          FESTIVAL DEL CHOCOLATE TABASCO
        </Typography>
      </div>
      <Grid container justifyContent="center" p={8} spacing={6}>
        <Grid
          item
          container
          alignItems="center"
          direction="column"
          xs={12}
          spacing={1}
        >
          <Grid item>
            <Typography
              color="#6C3F37"
              fontSize={{ xs: 26, md: 30 }}
              textAlign="center"
            >
              ¡EL FESTIVAL DEL SABOR!
            </Typography>
          </Grid>
        </Grid>
        <Grid item container rowSpacing={4} maxWidth="lg">
          <Grid item xs={12} md={7} pr={{ md: 6 }}>
            <Typography
              variant="body2"
              color="GrayText"
              textAlign="justify"
              lineHeight={1.5}
              fontWeight="500"
            >
              "El origen del cacao nace en Tabasco con los olmecas, cultura que
              dio vida al chocolate, y que con honor, ha sido orgullo para
              muchas generaciones. El cacao fue considerado para los Olmecas
              alimento, medicina y formó parte de la moneda de cambio. Siendo el
              grano quién impulsará al territorio de mesoamérica a expandir su
              única fruta, convirtiéndola en historia, pasión y sabor.
              <Typography
                variant="body2"
                color="GrayText"
                textAlign="justify"
                lineHeight={1.5}
                fontWeight="500"
              >
                Esta pasión dio origen, en el año 2010, al primer Festival del
                Chocolate como un homenaje a nuestra gastronomía y aporte
                cultural al mundo.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <StaticImage
              src="../assets/images/historia.jpg"
              alt="Logo"
              placeholder="none"
              width={500}
              imgStyle={{
                maxWidth: 500,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid item container maxWidth="lg">
          <ButtonGroup
            orientation={matches ? "horizontal" : "vertical"}
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            {buttons.map((button, key) => (
              <Button
                key={key}
                fullWidth
                style={{
                  borderRadius: 0,
                  borderColor: "transparent",
                  color:
                    button.name === buttonSelected?.name ? "white" : "#6c3f37",
                  backgroundColor:
                    button.name === buttonSelected?.name
                      ? "#6c3f37"
                      : "#f4cac2",
                }}
                onClick={() => handleShowFest(button)}
              >
                {button.name}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
        <Grid item container maxWidth="lg" ml={5} bgcolor="white">
          {loading ? (
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <CircularProgress size={50} color="primary" />
              </div>
            </Grid>
          ) : (
            <Fest image={buttonSelected.image} text={buttonSelected.text} />
          )}
        </Grid>
        <Grid item container maxWidth="lg" spacing={6}>
          <Grid item xs={12}>
            <Typography
              color="#6C3F37"
              fontSize={{ xs: 26, md: 30 }}
              textAlign="center"
            >
              UNA EXPERIENCIA MEMORABLE
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/01.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/02.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/03.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/04.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <img
              src={require("../assets/images/05.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <img
              src={require("../assets/images/06.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <img
              src={require("../assets/images/07.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/08.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/09.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/10.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <img
              src={require("../assets/images/11.jpg").default}
              width="100%"
              alt="Image 1"
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tours;
