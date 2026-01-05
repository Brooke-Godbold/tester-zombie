import TesterZombie from "../../assets/images/TesterZombie.png";
import { ItemDataNoDataContainer, ItemDataNoDataImage, ItemDataNoDataText } from "../item-data/ItemData.styles";

type ItemDataNoDataProps =  {
    text: string;
}

export function ItemDataNoData({ text }: ItemDataNoDataProps) {
    return (
        <ItemDataNoDataContainer>
            <ItemDataNoDataText>
                {text}
            </ItemDataNoDataText>
            <ItemDataNoDataImage src={TesterZombie} />
        </ItemDataNoDataContainer>
    )
}