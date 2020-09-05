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

export const LogoApp = Styles.ImageBackground`
   justifyContent: center;
    marginVertical: 16px;
    width: 126px;
    height: 125px;
`;

export const ImgIni = Styles.Image`
    alignSelf: center;
    width: 106.25px;
    height: 25px;
    marginVertical: 10px;
    marginTop: 24%;
    bottom: 0px;
`;
export const Texto = Styles.Text`
    alignSelf: center;
    marginVertical: 24px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    /* Roxo */
    color: #D298C7;
`;
export const Row = Styles.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    padding: 6px;
    `;
export const Line = Styles.View`
    width: 36%;
    height: 1;
    backgroundColor: #E5E5E5;
    margin: 8px;
        `;

  
export const Title= Styles.Text `
        fontSize: 20px;
        fontWeight: bold;
        color: #E5E5E5;
        `;
export const Redes = Styles.TouchableOpacity`
    alignSelf: center;
    backgroundColor: ${props => props.color};
    border-radius: 200px;
    width: 130px;
    height: 36px;
    margin: 6px;
    justify-content: space-around;
`;
export const Textobtn = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    alignSelf: center;

    color: #FFFFFF;
`;
