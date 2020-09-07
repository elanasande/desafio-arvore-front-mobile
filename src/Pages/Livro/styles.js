import Styles from 'styled-components/native'

export const View = Styles.View`
    flex: 1;
    
    justifyContent: center;
    align-items: center;
    height:100%;
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
    width: 36px;
    height: 24px;
`;

export const ImgLivro = Styles.Image`
    alignSelf: center;
    width: 87px;
    height: 124px;
    marginVertical: 12px;
`;

export const Titulo = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 26.653px;
    line-height: 32px;
    color: #595A5C;

`;
export const Row = Styles.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    padding: 6px;
    `;

export const Col = Styles.View`
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    padding: 12px;
    `;

export const Info = Styles.Text`
    width: 162px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* Cinza Médio */
    color: #626262;
    marginBottom: 12px;

`;

export const Sinopse = Styles.Text`
    width: 280px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    /* Cinza Médio */
    color: #626262;
    marginBottom: 12px;
 
`;

export const SinopseTitulo = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    /* Laranja */

    color: #FF995A;

`;

export const Icones = Styles.Image`
    alignSelf: center;
    width: 24px;
    height: 24px;
    margin: 6px;
`;