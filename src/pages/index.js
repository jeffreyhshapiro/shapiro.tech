import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../styles/Theme.js"
import GlobalStyle from "../styles/Global"
import { Container } from "../styles/Container"
import { Header, Text } from "../styles/Type"
import { UnorderedList, ListItem } from "../styles/List"

const aboutMe = ["loves simple web experiences", "did science before coding"]

const IndexPage = () => (
  <div className="container-root">
    <GlobalStyle theme={theme} />
    <ThemeProvider theme={theme}>
      <Container bg="palegrey" border="1px solid crimson" p={[4]} m={[2]}>
        <Header fontSize={[3]} mb={[3]}>
          Jeff Shapiro
        </Header>
        <Text fontSize={[2]} mb={[3]}>
          A NYC based front end developer who
        </Text>

        <UnorderedList mb={[2]}>
          <ListItem mb={2} ml={4} includeBullet>
            <Text>
              is building things so <a href="https://www.bombas.com">Bombas</a>{" "}
              can help those in need
            </Text>
          </ListItem>
          {aboutMe.map((about, i) => (
            <ListItem mb={2} ml={4} includeBullet key={i}>
              <Text>{about}</Text>
            </ListItem>
          ))}
        </UnorderedList>

        <Text mb={[2]}>Check out my:</Text>
        <UnorderedList mb={[2]}>
          <ListItem mb={[1]}>
            <a href="https://www.linkedin.com/in/jeffreyhshapiro/">LinkedIn</a>
          </ListItem>
          <ListItem mb={[1]}>
            <a href="https://github.com/jeffreyhshapiro">Github</a>
          </ListItem>
        </UnorderedList>
        <Text>
          <a href="mailto:jeffreyhshapiro@gmail.com">Contact Me</a>
        </Text>
      </Container>
    </ThemeProvider>
  </div>
)

export default IndexPage
