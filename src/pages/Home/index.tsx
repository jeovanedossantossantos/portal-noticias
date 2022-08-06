import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import Card from "../../components/Card"
import { Wrapper } from '../../components/Header/style';
import {getTopHeadline} from "../../services/newsApi/noticias"

interface Article {
    title: string;
    url: string;
    description: string;
    urlToImage: string;
}

export const Home: React.FC = () => {
    const [data, setData] = useState<Article[]>([])

    useEffect(() => {

        const getNoticias = async () => {
           const res = await getTopHeadline()
           setData(res.articles)
           console.log(res)
       
        }

        getNoticias()

    },[])
    return (
        <div>
            <Header/>
            <Wrapper>
               <div style={{display: "flex",flexWrap:"wrap", width: "100%",  margin:"10px"}}>
               {data.map(e =>{
                    return <Card
                        titulo={e.title}
                        resumo={e.description}
                        link={e.url}
                        image={e.urlToImage}
                    />
                    
                })}
               </div>
               
            </Wrapper>
        </div>

    )
}