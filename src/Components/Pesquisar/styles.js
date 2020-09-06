import Styles from 'styled-components/native'

export const Row = Styles.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    `;
export const ViewInput = Styles.View`
    alignSelf: center;
    backgroundColor: ${props => props.colorI};
    justifyContent: center;
    alignItems: center;
    alignSelf: center;
    border-radius: 200px;
    width: 280px;
    height: 36px;
    margin: 6px;
    `;


export const TextInput = Styles.TextInput`
    alignSelf: center;
    border-radius: 200px;
    width: 280px;
    height: 36px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    line-height: 22px;
    drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.28));
    padding-left:10px;
    margin: 6px;
    color: ${props => props.placeholderTextColor};
`;

export const TouchableOpacity = Styles.TouchableOpacity`
    alignSelf: center;
    align-items: center;
    position: absolute;
    right: 10px;
    width: 36px;
    height: 36px;
`;

export const Img = Styles.Image`
    alignSelf: center;
    width: 28px;
    height: 28px;
    marginVertical:3px;
`;