"use client";
import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Input } from "@/components/Input/Input";
import UserContext from "@/context/UserContext";
import { loadLoginState } from "@/helpers/loadLoginState";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Busca() {
    loadLoginState()
    const router = useRouter();
    const [cityName, setCityName] = useState<string>("");
    const [cityList, setCityList] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { userName } = useContext(UserContext) ?? {};

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCityName(event.target.value);
    };

    const loadCities = async () => {
        setIsLoading(true);
        console.log("blaa");

        try {
            const response = await fetch(
                `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
            );

            const data = await response.json();
            setCityList(data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClick = () => {
        loadCities();
    };

    const handleNavigate = (cityCode: number) => {
        const state = {
            cityCode: cityCode,
        };

        router.push(`/?cityCode=${state.cityCode}`);
    };

    return (
        <>
            <Header title="Busca" userName={userName} />
            <form>
                <Input
                    label="Buscar cidade"
                    id="search"
                    name="search"
                    type="text"
                    onChange={handleChange}
                />
                <Button type="button" onClick={handleClick}>
                    Buscar
                </Button>
            </form>

            <div>
                {isLoading ? (
                    <p>Carregando</p>
                ) : (
                    <ul>
                        {cityList.map((city) => (
                            <li
                                key={city.id}
                                onClick={() => handleNavigate(city.id)}
                            >
                                {city.nome} / {city.estado}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}



