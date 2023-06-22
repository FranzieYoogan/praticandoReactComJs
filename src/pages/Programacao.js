import './Programacao.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SiUndertale } from 'react-icons/si';
import { MdBuild } from 'react-icons/md';
import { IoHeartDislikeSharp } from 'react-icons/io5'

function Programacao() {

    const [data, setData] = useState([])

    const [programacao, setProgramacao] = useState()









    useEffect(() => {
        axios.get('http://localhost:4000/cards')
        .then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    },[])


    function deletar(index) {
        
  
                

                    

        return  axios.delete(`http://localhost:4000/cards/${index}`)
        
               .then(() => {
                    setTimeout(() => window.location.reload(),1000);
                    //    setProgramacao(programacao.filter(programacoes => programacoes.id !== index))
  
               })
            
          
      } 
    return (

        <>
            <section className='container-programacao'>
                <h1 className="titulo-programacao">Programação</h1>
                <section className='container-border-programacao'>
                    <section className='container-border-programacao2'></section>
                </section>



            
                    <section className="pt-5 pb-5 ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-6">

                                </div>
                                <div className="col-6 text-right">



                                    <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                                        <i className="fa fa-arrow-left"></i>
                                    </a>
                                    <a className="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                                        <i className="fa fa-arrow-right"></i>
                                    </a>
                                </div>
                                <div className="col-12">



                                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                                        <div className="carousel-inner">






                                            <div className="carousel-item active ">
                                                <div className="row ">
                                                    {data.filter((name) => name.time.includes('Programação')).map((filteredtime) => (
                                           
                                                        <div key={filteredtime.id} className="col-md-4 mb-3 container-card-programacao">





                                                            <div className="card">
                                                                <div className='container-img'>


                                                                    <img className="rounded-circle image-style" alt="imagem timee" src={filteredtime.imagem} height={'250px'} width={'300px'} />
                                                                </div>
                                                                <div className="card-body">
                                                                    <h4 className="card-title">{filteredtime.nome}</h4>
                                                                    <p className="card-text"><span className='span-programacao'><SiUndertale className="icon-time"></SiUndertale> Cargo:</span> {filteredtime.cargo}</p>

                                                                    <div className=''>
                                                                        <div className='container-button'>
                                                                            
                                                                            <button type="button" className="btn btn-primary button-programacao-style"><MdBuild className='icon-time2'></MdBuild> Editar</button>

                                                                                   
                                                                                        
                                                                            <button type='button'  className="btn btn-primary button-programacao-style" onClick={(e) =>deletar(filteredtime.id)}>
                                                                                    <IoHeartDislikeSharp className='icon-time2' ></IoHeartDislikeSharp> Deletar</button>
                                                                      
                                                                        
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>







                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
          


            </section>
        </>

    )
}

export default Programacao;