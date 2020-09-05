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
    marginVertical: 24px;
    width: 130px;
    height: 36px;
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
    font-size: 11.253px;
    line-height: 13px;
    text-align: center;
    alignSelf: center;

    color: #AAAAAA;
`;
    