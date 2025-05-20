'use client'

import Button from "@/components/button";
import { useState } from "react";

import { dataJsonMock } from "../data/getData"
import ButtonBlue from "@/components/buttonBlue";
import { mockPostData } from "@/service/postMockApi";



export default function Home() {

  const [ jsonData, setJsonData ] = useState();
  const [postedData, setPostedData] = useState(null);
  
  /**
   * Como já haviamos feito esta parte durante o livecoding, achei por bem manter
   */
  const handleGetClick = () => {
      setJsonData( JSON.stringify(dataJsonMock, null, 2) )
      console.log("Click entrando aqui", jsonData);
  } 

  const handlePostClick = async () => {
    /**
     * Um ponto que me deixou em duvida, foi que o json do get e do post são diferentes,
     * portanto, pensei em colocar em diferentes divs para exemplificar melhor o que cada botão ta fazendo
     */
    
    const newEntry = {
      success: true,
      data: [
        {
          id: 1,
          name: "aut",
          category: "Saúde",
          value_product: "3.26",
          date_last_purchase: "2025-01-01",
          stock: 20,
          created_at: Date.now(),
          updated_at: Date.now()
        },
        {
          id: 3,
          name: "aliquam",
          category: "Alimentação",
          value_product: "0.89",
          date_last_purchase: "2025-02-20",
          stock: 10,
          created_at: Date.now(),
          updated_at: Date.now()
        },
      ]
    }

    console.log("Um teste");
    

    try {
      const response = await mockPostData(newEntry)
      setPostedData(response.data)
    } catch (error) {
      console.error("Erro ao simular POST", error)
    }
  }

  return (
    <div>
      <div className="flex items-center m-6">
        <Button onCLick={handleGetClick} />

        <ButtonBlue onclick={handlePostClick} />
      </div>
      
    
      <div id="content" className="bg-white text-black p-7 m-6"><pre>{jsonData}</pre></div>

      <div className="bg-white text-black p-7">
        {postedData && (
          <div style={{ marginTop: "2rem" }}>
            <pre>{JSON.stringify(postedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
