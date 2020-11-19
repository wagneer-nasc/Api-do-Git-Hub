import React, { useRef, useState } from 'react';
import Toast from 'react-native-tiny-toast'
import api from '../../service/api';
import { Modalize } from 'react-native-modalize';
import {
    Container, Title, InputText, ContainerInput, ContainerButton, ButtonText,
    ContainerModalize, HeaderModalize, AvatarModalize, HeaderText, ContainerButtonUrl,
    ButtonTextUrl
} from './style'; 
import { KeyboardAvoidingView, Linking, Platform, ScrollView, View } from 'react-native';

interface User {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
}

const Dashboard: React.FC = () => {
    const modalizeRef = useRef<Modalize>(null);
    const [newUser, setNewUser] = useState('');
    const [user, setUSer] = useState<User>();

    async function handleUser() {
        if (!newUser) return Toast.show('Para consultar o nome não pode ser vazio');
        try {

            await api.get<User>(`/${newUser}`).then(response => {
                const user = response.data;
                setUSer(user);
                modalizeRef.current?.open();
            })

        } catch (err) {
            return Toast.show('Usuário não encontrado.');
        }
    }
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <View>
                            <Title> Api GitHub </Title>
                        </View>
                        <ContainerInput>
                            <InputText
                                keyboardAppearance="dark"
                                placeholder="Digite o nome do usuario aqui"
                                placeholderTextColor="#a9a9a9"
                                value={newUser}
                                onChangeText={setNewUser} />
                        </ContainerInput>
                        <ContainerButton onPress={handleUser}>
                            <ButtonText>Procurar</ButtonText>
                        </ContainerButton>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>

            <Modalize
                modalStyle={{ backgroundColor: "#a9a9a9" }}
                modalHeight={300}
                ref={modalizeRef} >

                <ContainerModalize>
                    <HeaderModalize>
                        <AvatarModalize source={{ uri: user?.avatar_url }}></AvatarModalize>
                        <HeaderText>{user?.login}</HeaderText>
                    </HeaderModalize>
                    <ContainerButtonUrl
                        onPress={() => Linking.openURL(`${user?.html_url}`)}
                    >
                        <ButtonTextUrl>
                            Link: {user?.html_url}
                        </ButtonTextUrl>
                    </ContainerButtonUrl>
                </ContainerModalize>
            </Modalize>
        </>
    )
}

export default Dashboard;