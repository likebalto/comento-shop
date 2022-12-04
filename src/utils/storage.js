import { ProductionQuantityLimits } from "@mui/icons-material";

const BASKET = "BASKET";

// 상품리스트 가져오기
export const getBasketItems = () => {
    // 어떤 키값으로 아이템을 가져오는 함수 그래서 값을 받아 올 수 있도록 아래처럼 작성
    const items = localStorage.getItem(BASKET);

    // 처음에 아이템이 있을 수도 있고 없을 수도 있으니까 그거 고려해서
    // TODO : 뒤에 없는 경우에다가 장바구니 비어있다는 코드 넣어주자
    return items ? JSON.parse(items) : [];
};

export const addItemtoBasket = (product) => {

    // 이미 저장되어있는 상품리스트 불러와서 거기에 넣기
    let items = getBasketItems();

    // 오브젝트상태에서 느낌표를 붙여주면 false가 됨 ex. !object=false 
    // 근데 느낌표 한번더 붙이면 true가 됨 ex. !!object=true
    // 한 상품이 중복으로 안담아지게
    const isSameProduct = !!items.find((item) => item.find(item => item.id === product.id));

    if (!isSameProduct) {
        items.push(product);
        // BASKET은 상수처럼 계속 쓸 key값이라서 위에 따로 상수 만들어줄 것
        localStorage.setItem("BASKET", JSON.stringify(items));
    }
};