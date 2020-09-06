import Styles from 'styled-components/native'

export const TouchableOpacity = Styles.TouchableOpacity `
    alignSelf: center;
    width: 87px;
    height: 162px;
    drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.28));
    margin: 8px;
`;
export const Title = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 11.253px;
    line-height: 13px;
    /* Cinza Escuro */
    color: #303030;
`;

export const Text = Styles.Text`
    font-style: normal;
    font-weight: 500;
    font-size: 11.253px;
    line-height: 13px;
    /* Cinza */

    color: #9B9B9B;
`;

export const Img = Styles.Image`
    alignSelf: center;
    width: 87px;
    height: 124px;
`;