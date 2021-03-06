import Styles from 'styled-components/native'

export const TouchableOpacity = Styles.TouchableOpacity `
    alignSelf: center;
    background: #45D0C1;
    border-radius: 200px;
    width: 280px;
    height: 36px;
    drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.28));
    margin: 5px;
`;

export const Text = Styles.Text`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    alignSelf: center;
    alignContent: center;
    paddingVertical: 9px;
    color: #FFFFFF;
`;