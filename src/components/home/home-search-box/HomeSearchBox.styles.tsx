import styled from 'styled-components/native';

export const Container = styled.View`
  width: 300px;
  height: 100px;
  margin-top: 30px;
  justify-content: space-between;
`;

export const SearchBox = styled.View`
  height: 45px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #6ecec9;
  border-radius: 10px;
  background: #ffffff;
`;

export const Input = styled.TextInput`
  width: 85%;
  padding-left: 17px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 12px;
`;

export const IconBox = styled.TouchableOpacity`
  padding-right: 17px;
`;

export const ButtonBox = styled.TouchableOpacity`
  height: 40px;
  border-radius: 10px;
  background: #6ecec9;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;
