import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import Seo from "../assets/components/seo";

const Historia = () => {
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
          HISTORIA DEL CHOCOLATE
        </Typography>
      </div>
      <Grid container justifyContent="center" p={8} spacing={6}>
        <Grid item xs={12}>
          <Typography
            color="#6C3F37"
            fontSize={{ xs: 26, md: 30 }}
            textAlign="center"
          >
            Patria del cacao y cuna del chocolate
          </Typography>
        </Grid>
        <Grid item container spacing={4} maxWidth="lg">
          <Grid item container xs={12} lg={6} direction="column">
            <Grid item>
              <Typography fontWeight="bold" color="#6C3F37" fontSize={18}>
                México nació en Tabasco, y en tabasco el cacao.
              </Typography>
            </Grid>
            <Grid item>
              <Typography textAlign="justify">
                La historia del chocolate inicia en México con Los Olmecas,
                cultura madre mesoamericana, primera civilización indígena del
                sureste de la región quienes fueron los primeros en cultivar el
                cacao, semilla que da origen a la bebida ancestral, “El
                Xocolatl”que se obtenía de la mezcla del cacao tostado y molido,
                con especias y agua. Entre los antiguos habitantes de toda
                Mesoamérica este fruto, alimento de los dioses (Como se le
                conocía en la antigüedad), era usado como símbolo de riqueza.
                Almacenar o beber “el Xocolatl” en agua era solo para guerreros
                o personajes de la alta sociedad, y en algunos casos se
                destinaba a celebraciones o ritos. El cacao era la moneda
                utilizada en la antigua Tenochtitlan, con la que se
                comercializaba, por lo que se dice que Moctezuma llegó a
                acumular una fortuna de 100 millones de almendras de cacao. El
                territorio tabasqueño fue el corredor comercial de los olmecas,
                mayas y aztecas a través de los ríos mayas, y con el tiempo, la
                semilla del cacao fue adquiriendo gran valor hasta ser utilizada
                como moneda de cambio entre estas culturas
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} lg={6} justifyContent="center">
            <StaticImage
              src="../assets/images/animación historia del cacao_Xocolatl.png"
              alt="Logo"
              placeholder="none"
              width={550}
              imgStyle={{
                maxWidth: 550,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>

          <Grid item container xs={12} justifyContent="center">
            <StaticImage
              src="../assets/images/division.png"
              alt="Logo"
              placeholder="none"
              imgStyle={{
                objectFit: "cover",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={4} maxWidth="lg">
          <Grid item container xs={12} lg={6} justifyContent="center">
            <StaticImage
              src="../assets/images/animación historia del cacao-03.png"
              alt="Logo"
              placeholder="none"
              width={550}
              imgStyle={{
                maxWidth: 550,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item container xs={12} lg={6} direction="column">
            <Grid item>
              <Typography fontWeight="bold" color="#6C3F37" fontSize={18}>
                El cacaotero
              </Typography>
            </Grid>
            <Grid item>
              <Typography textAlign="justify">
                El cacao proviene de una fruta de origen tropical que nace del
                cacaotero, un árbol pequeño que crece en ambientes tropicales.
                El origen del cacaotero se encuentra en Tabasco, Campeche y
                Chiapas, en la costa del Pacífico y prácticamente en todas las
                zonas donde se desarrolló la cultura maya. Los olmecas de “La
                Venta” en Tabasco fueron los primeros humanos en saborear esta
                bebida, se dice que, a las habas de cacao molidas, se les
                mezclaban con agua y se le añadían especias. Se consumía el
                cacao mezclado con semillas de zapote y maíz, que se dosificaba
                en pequeñas bolitas o pastillas y después se entregaba a los
                guerreros mezcladas con agua caliente. También se preparaba con
                miel o flores, se le agregaba pimienta gorda, achiote, acuyo o
                hierba santa y también pinole. Al ser símbolo de riqueza, la
                jícara en donde se servía estaba adornada con una cucharadita de
                oro, plata o maderas preciosas. Los olmecas fueron los primeros
                que comenzaron a cultivar el cacao. Se cree que en los primeros
                tiempos el cacao se consumía como una bebida a base de
                fermentación, algo parecido a una cerveza.
              </Typography>
            </Grid>
          </Grid>

          <Grid item container xs={12} justifyContent="center">
            <StaticImage
              src="../assets/images/division.png"
              alt="Logo"
              placeholder="none"
              imgStyle={{
                objectFit: "cover",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid item container spacing={4} maxWidth="lg">
          <Grid item container xs={12} lg={6} direction="column">
            <Grid item>
              <Typography fontWeight="bold" color="#6C3F37" fontSize={18}>
                El chocolate en barra
              </Typography>
            </Grid>
            <Grid item>
              <Typography textAlign="justify">
                Con la llegada de Hernán Cortes a Tenochtitlán el cacao fue
                llevado a España, y así fue como llegó a manos de Coenraad Van
                Houten que en 1828 lo convirtió en cocoa. Para los españoles el
                cacao fue un gran hallazgo que adoptaron rápidamente, le
                agregaron leche, un poco de azúcar, canela y otras especias.
                Para 1870, el chocolatero Daniel Peters mezclaría el cacao con
                leche y azúcar para crear las barras de chocolate que se
                consumen como golosina. El chocolate, como fue conocido desde
                ese momento, adquirió gran popularidad en toda Europa y
                posteriormente en todo el mundo. Hoy, en Tabasco México, la
                actividad chocolatera es de gran importancia, al grado de llegar
                a ser protagonistas en festivales internacionales obteniendo
                premios en cada uno de ellos, y aún existen haciendas que
                realizan el proceso de manera artesanal conservando las
                tradiciones, la esencia y todo el sabor a Tabasco, por eso es
                reconocido como “Patria del cacao y cuna del chocolate".
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12} lg={6} justifyContent="center">
            <StaticImage
              src="../assets/images/animación historia del cacao_Cortes.png"
              alt="Logo"
              placeholder="none"
              width={550}
              imgStyle={{
                maxWidth: 550,
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Grid>

          <Grid item container xs={12} justifyContent="center">
            <StaticImage
              src="../assets/images/division.png"
              alt="Logo"
              placeholder="none"
              imgStyle={{
                objectFit: "cover",
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
        <Grid item container maxWidth="lg" spacing={4}>
          <Grid item container xs={12} direction="column">
            <Grid item>
              <Typography fontWeight="bold" color="#6C3F37" fontSize={18}>
                Bebidas populares de cacao en Tabasco
              </Typography>
            </Grid>
            <Grid item>
              <Typography textAlign="justify">
                <p>
                  Pozol: Bebida fermentada a base de maíz molido, hojas de
                  plátano y cacao, endulzado con azúcar de caña.
                </p>
                <p>
                  Champurrado: Hecho con masa para nixtamal, agua y chocolate en
                  tablillas.
                </p>
                <p>
                  Atole agrio de maíz tierno: Lleva maíz hervido y molido con
                  pimienta y un toque de chocolate.
                </p>
                <p>
                  Chorote: Es un fermentado de masa de nixtamal y cacao molido
                  que se acompaña con dulces tradicionales de coco o papaya
                  silvestre y se bebe en fiestas religiosas o rezos.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Historia;
