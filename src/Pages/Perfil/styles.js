import Styles from 'styled-components/native'

export const View = Styles.View`
    flex: 1;
    
    justifyContent: center;
    align-items: center;
    height:100%;

`;

export const Container = Styles.ImageBackground`

    justifyContent: center;
    marginVertical: 10px;
    padding: 24px;
    height: 25px;
`;

export const ImgIni = Styles.Image`
    alignSelf: center;
    width: 106.25px;
    height: 25px;
    marginVertical: 10px;
    marginTop: 24%;
    bottom: 0px;
`;

export const Profile = Styles.TouchableOpacity `
    alignSelf: center;
    align-items: center;
    width: 70px;
    height:  94px;
    drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.28));
`;

export const ImgProfile = Styles.Image`
    alignSelf: center;
    width: 70px;
    height: 70px;
    marginVertical: 10px;
    border-radius: 200px;
    marginTop: 24%;
    background: #D298C7;
`;

export const Nome = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* Roxo */
    color: #D298C7;
`;

export const ViewPerfil = Styles.View`
    flexDirection: row;
    
    align-items: center;
    width: 80%;
    height: 40%;
    justify-content: space-around;

`;
export const Arrow = Styles.TouchableOpacity `
    alignSelf: center;
    align-items: center;
    width: 50px;
    height:  36px;
    position: absolute;
    left: 20px;
    top: 20px;
`;
export const ImgArrow = Styles.Image`
    alignSelf: center;
    width: 40px;
    height: 36px;
`;

export const Adicionar = Styles.TouchableOpacity `
    alignSelf: center;
    align-items: center;
    border-radius: 200px;
    width: 97px;
    height:  36px;
    drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.28));
    position: absolute;
    right: 20px;
    top: 20px;
    backgroundColor: #45D0C1;
`;
export const AdicionarText = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    alignSelf: center;
    alignContent: center;
    paddingVertical: 9px;
    color: #FFFFFF;
`;