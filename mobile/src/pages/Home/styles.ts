import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  padding: 80px 20px 0;
  flex: 1;
  background-color: #f2f2f2;
`;

export const Title = styled.Text`
  font-family: 'Ubuntu_700Bold';
  font-size: 24px;
`;

export const ButtonMenu = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
`;

export const CardPrimary = styled.TouchableOpacity`
  width: 300px;
  height: 300px;
  margin: 8px 16px 0 0;

  border-radius: 16px;
  padding: 20px;
  background-color: #d9d9d9;
`;

export const CardPrimaryImage = styled.Image`
  width: 100%;
  height: 70%;
  margin-bottom: 16px;
`;

export const CardPrimaryFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrimaryInfo = styled.View`
  align-items: flex-end;
`;

export const CardPrimaryTitle = styled.Text`
  font-size: 28px;
  font-family: 'Ubuntu_700Bold';
`;

export const CardPrimaryPrice = styled.Text`
  font-size: 24px;
  font-family: 'Roboto_500Medium';
`;

//secundary card

export const CardSecundary = styled.TouchableOpacity`
  width: 100%;
  height: 100px;

  flex-direction: row;
  justify-content: space-between;

  border-radius: 4px;
  padding: 8px;
  background-color: #d9d9d9;
`;

export const CardSecundaryImage = styled.Image`
  width: 20%;
  height: 100%;
`;

export const CardSecundaryFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardSecundaryInfo = styled.View`
  align-items: flex-end;
`;

export const CardSecundaryTitle = styled.Text`
  font-size: 28px;
  font-family: 'Ubuntu_700Bold';
`;

export const CardSecundaryPrice = styled.Text`
  font-size: 24px;
  font-family: 'Roboto_500Medium';
`;

export const CardSecundaryCart = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.6);

  height: 100%;
  width: 30%;

  border-radius: 25px;

  justify-content: center;
  align-items: center;
`;

export const CardPrimaryCart = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.6);

  height: 50px;
  width: 50px;

  border-radius: 25px;

  justify-content: center;
  align-items: center;
`;
