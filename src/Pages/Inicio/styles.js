import Styles from 'styled-components/native'

export const View = Styles.View`
    flex: 1;
    
    justifyContent: center;
    align-items: center;
    height:100%;
`;

export const Container = Styles.ImageBackground`
    position: absolute;
    bottom:10px;
    justifyContent: center;
    marginVertical: 10px;
    padding: 24px;
`;

export const LogoApp = Styles.ImageBackground`
   justifyContent: center;
    marginVertical: 16px;
    width: 170px;
    height: 197px;
`;

export const ImgIni = Styles.Image`
    alignSelf: center;
    width: 106.25px;
    height: 25px;
    position: absolute;
`;