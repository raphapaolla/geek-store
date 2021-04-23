import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f2f2f2;

  justify-content: space-evenly;
`;

export const Header = styled.View`
  margin-bottom: 36px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: 24px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ConfirmeButton = styled.TouchableOpacity`
  width: 48%;
  background-color: #34cb79;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const CancelButton = styled.TouchableOpacity`
  width: 48%;
  background-color: #ec0101;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto_500Medium';
`;
