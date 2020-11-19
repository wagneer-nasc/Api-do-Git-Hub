import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1 ;   
    align-items: center;
    justify-content: center;
    background:  #a9a9a9;
    padding: 20px;
       `;

export const Title = styled.Text`
    font-size: 25px;
    margin: 20px;

`;
export const InputText = styled.TextInput`
      font-size: 24px;
           
`; 

export const ContainerInput = styled.View`
    width: 100%;    
    height: 60px;
    border-radius: 50px;
    padding: 18px;
    background:  #4b4b4b;

`;

export const ContainerButton = styled.TouchableOpacity`
    width: 100%;    
    height: 60px;
    border-radius: 50px;
    background:  #4b4b4b;
    margin-top: 22px;

    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
      font-size: 18px;
     
`; 
export const ContainerModalize = styled.View`
    padding: 20px;
`;
export const HeaderModalize = styled.View`
    flex: 1;
    align-items: center;


`;
export const AvatarModalize = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
   
`;
export const HeaderText= styled.Text`
    font-size: 25px;
    padding-top: 10px;
`;

export const ContainerButtonUrl = styled.TouchableOpacity`
     align-items: center;
    justify-content: center;
`;
export const ButtonTextUrl = styled.Text`
    font-size: 18px;
    color: #0000CD;
    margin-top: 20px;
    
`;