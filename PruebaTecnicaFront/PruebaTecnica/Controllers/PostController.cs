using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PruebaTecnica.Services;

namespace PruebaTecnica.Controllers
{


    [ApiController]
    [Route("api/[controller]")]

    public class PostController : ControllerBase
    {


        private readonly IJsonHolderService jsonHolderService;
        private readonly ILogger<PostController> logger;

        public PostController(IJsonHolderService jsonHolderService, ILogger<PostController> logger)
        {
            this.jsonHolderService = jsonHolderService;
            this.logger = logger;
        }

        [HttpGet("full-data")]
        
        public async Task<IActionResult> GetPosts()
        {
            try
            {


                var posts = await jsonHolderService.GetPostsWhitFullData();


                return Ok(posts);




            }
            catch (Exception ex)
            {

                logger.LogError(ex, "Error al obtener los posts con datos completos");
                return StatusCode(StatusCodes.Status500InternalServerError, "Ocurrió un error al procesar la solicitud.");  
            }




        }
    }
}
