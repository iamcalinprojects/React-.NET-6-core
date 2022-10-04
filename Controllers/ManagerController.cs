using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactProject.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagerController : ControllerBase
    {
        // GET: api/<ManagerController>
        [HttpGet]
        public string Get()
        {
            using (var man = new PersonaleContext())
            {
                var manager = man.Managers.ToList();
                return JsonConvert.SerializeObject(manager);
            }
        }

        // GET api/<ManagerController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ManagerController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ManagerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ManagerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
