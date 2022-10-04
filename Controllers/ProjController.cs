using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactProject.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjController : ControllerBase
    {
        // GET: api/<ProjController>
        [HttpGet]
        public string Get()
        {
            {
                using (var proj = new PersonaleContext())
                {
                    var project = proj.Projs.ToList();
                    return JsonConvert.SerializeObject(project);
                }

            }
        }

        // GET api/<ProjController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<ProjController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProjController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProjController>/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            try
            {
                using (var context = new PersonaleContext())
                {
                    var project = context.Projs.Where(b => b.Empno == id).First();
                    context.Remove(project);
                    context.SaveChanges();
                    return "1";
                }

            }
            catch (Exception e)
            {
                var error = e.Message;
                return "0";

            }
        }
    }
}
