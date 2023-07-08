import "./Home.css";
import { FlexBox, Image, Button, Text } from ".././../components";
import UpraisedLogo from "../../assets/images/icons/upraised-logo.png";
import QuizLogo from "../../assets/images/icons/quiz.png";

const Home = () => {
  return (
    <FlexBox
      className="home-container"
      container
      flexDirection="column"
      justifyContent="space-around"
      padding="0 20px"
      height="100vh"
    >
      <FlexBox>
        <Image src={UpraisedLogo} alt="upraised-logo" />
      </FlexBox>
      <FlexBox container justifyContent="center">
        <Image src={QuizLogo} alt="quiz-logo" width={200} height={200} />
      </FlexBox>
      <FlexBox>
        <Button onClickFn={(e) => console.log(e)}>
          <Text size={20} weight={600}>
            Start
          </Text>
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default Home;
