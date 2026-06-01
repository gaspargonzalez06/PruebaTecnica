using PruebaTecnica.DTO;

namespace PruebaTecnica.Models
{
    public class PostsWhitAllData
    {

        public int  id { get; set; }
        public string Tittle { get; set; }

        public string Body { get; set; }

        public string Author { get; set; }

        public List<CommentsDTO> Comments { get; set; }


    }
}
