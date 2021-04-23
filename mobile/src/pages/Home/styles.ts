import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 80px 20px 0;
  flex: 1;
  background-color: #f2f2f2;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 36px;
  align-items: center;
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

export const Card = styled.View`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;

  border-radius: 16px;
  padding: 20px;
  background-color: #d9d9d9;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 70%;
  margin-bottom: 16px;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardInfo = styled.View`
  align-items: flex-end;
`;

export const CardTitle = styled.Text`
  font-size: 28px;
  font-family: 'Ubuntu_700Bold';
`;

export const CardPrice = styled.Text`
  font-size: 24px;
  font-family: 'Roboto_500Medium';
`;

export const AddToCartButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.6);

  width: 50px;
  height: 50px;

  border-radius: 25px;

  justify-content: center;
  align-items: center;
`;
