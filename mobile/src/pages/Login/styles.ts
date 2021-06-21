import styled from 'styled-components/native';

interface ICircle {
  tam: number;
}

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 40px;
  font-family: 'Ubuntu_700Bold';
  letter-spacing: 2px;
`;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const Form = styled.View`
  width: 80%;
`;

export const ContinueButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.3);
  width: 80%;
  height: 80px;
  align-items: center;
  border-radius: 40px;

  flex-direction: row;
`;

export const ContinueButtonText = styled.Text`
  color: #fff;
  font-family: 'Roboto_500Medium';
  font-size: 20px;
`;

export const ContinueButtonIconContainer = styled.View`
  width: 80px;
  height: 80px;

  align-items: center;
  justify-content: center;

  margin-right: 16%;
`;

export const Circle = styled.View<ICircle>`
  width: ${(props) => props.tam + 'px'};
  height: ${(props) => props.tam + 'px'};
  background-color: rgba(255, 255, 255, 0.5);
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;
