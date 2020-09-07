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

export const Avatar = Styles.ImageBackground`
   justifyContent: center;
    marginVertical: 24px;
    width: 116px;
    height: 116px;
    
`;

export const ImgAvatar = Styles.Image`
    alignSelf: center;
    width: 116px;
    height: 116px;
    marginVertical: 10px;
    marginTop: 24%;
    bottom: 0px;
    backgroundColor: #BDBDBD;
    border-radius: 200px;
`;

export const ImgIni = Styles.Image`
    alignSelf: center;
    width: 69px;
    height: 16px;
    marginVertical: 10px;
    marginTop: 24%;
    bottom: 0px;
`;

export const Row = Styles.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    paddingVertical: 16px;
    
    `;
export const Texto = Styles.Text`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    /* Roxo */

    color: #D298C7;
`;

export const Answer = Styles.TouchableOpacity`
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

export const Titulo = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 26.653px;
    line-height: 32px;
    color: #595A5C;
    top: 24px;
    position: absolute;

`;