using PruebaTecnica.Models;

namespace PruebaTecnica.Services
{
    public interface IJsonHolderService
    {


        public Task<List<PostsWhitAllData>> GetPostsWhitFullData();


    }
}
