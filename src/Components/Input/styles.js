import Styles from 'styled-components/native'

export const TextInput = Styles.TextInput`
    alignSelf: center;
    width: 280px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    line-height: 22px;
    marginBottom: 20px;
    color: ${props => props.color};
`;