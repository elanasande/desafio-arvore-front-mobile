import Styles from 'styled-components/native'

export const View = Styles.View`
    flex: 1;
    
    justifyContent: center;
    align-items: center;
    paddingTop: 24px;
`;
export const Container = Styles.ImageBackground`
    border-radius: 200px;
    justifyContent: center;
    marginVertical: 10px;
    padding: 24px;
    height: 25px;
`;

export const ImgIni = Styles.Image`
    alignSelf: center;
    width: 69px;
    height: 16px;
    marginVertical: 10px;
    marginTop: 24%;
    bottom: 0px;
`;

export const Arrow = Styles.TouchableOpacity `
    alignSelf: center;
    align-items: center;
    width: 40px;
    height:  28px;
    position: absolute;
    paddingVertical: 3px;
    left: 10px;
    top: 20px;
`;
export const ImgArrow = Styles.Image`
    alignSelf: center;
    width:  36px;
    height: 24px;
`;

export const ScrollView = Styles.ScrollView`
    width: 280px;
`;

export const Ilustra = Styles.Image`
    alignSelf: center;
    width:  280px;
    height: 196px;
    marginVertical: 12px;
`;

export const Titulo = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 26.653px;
    line-height: 32px;
    color: #595A5C;

`;
export const Texto = Styles.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
line-height: 18px;
    color: #595A5C;
    marginVertical: 6px;

`;
export const H2 = Styles.Text`
font-style: normal;
font-weight: bold;
font-size: 26.653px;
line-height: 32px;
/* Roxo */

color: ${props => props.color};
padding:6px;

`;

export const Acessibilidade = Styles.TouchableOpacity `
    alignSelf: center;
    align-items: center;
    width: 40px;
    height:  28px;
    position: absolute;
    paddingVertical: 3px;
    right: 10px;
    top: 20px;
`;
export const ImgAcesso = Styles.Image`
    alignSelf: center;
    width:  24px;
    height: 24px;
`;