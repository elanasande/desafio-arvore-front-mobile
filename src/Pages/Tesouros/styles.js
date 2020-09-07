import Styles from 'styled-components/native'

export const View = Styles.View`
    flex: 1;
    
    justifyContent: center;
    align-items: center;
    top:20px;
`;
export const Container = Styles.ImageBackground`
    border-radius: 200px;
    justifyContent: center;
    marginVertical: 10px;
    padding: 24px;
    height: 25px;
`;

export const LogoApp = Styles.ImageBackground`
   justifyContent: center;
    width: 62px;
    height: 18px;
    marginBottom: 10px;
    
`;

export const ImgIni = Styles.Image`
    alignSelf: center;
    width: 69px;
    height: 16px;
    marginVertical: 10px;
    bottom: 8px;
`;

export const Texto = Styles.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    /* Roxo */

    color: #D298C7;
`;

export const Titulo = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 26.653px;
    line-height: 32px;
    color: #595A5C;
`;

export const ScrollView = Styles.ScrollView`
    overflow:hidden;
    width:280px;
`;