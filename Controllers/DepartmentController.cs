using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactProject.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        // GET: api/<DepartmentController>
        [HttpGet]
        public string Get()
        {
            using (var dept = new PersonaleContext())
            {
                var department = dept.Depts.ToList();
                return JsonConvert.SerializeObject(department);
            }
        }

        // GET api/<DepartmentController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DepartmentController>
        [HttpPost]
        public string Post([FromForm] IFormCollection value)
        {
            try
            {
                using (var context = new PersonaleContext())
                {
                    var department = new Dept();
                    department.Deptno = new Random().Next(32, 10000);
                    department.Dname = value["departmentName"];
                    department.Loc = value["location"];
                    context.Add(department);
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

        // PUT api/<DepartmentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DepartmentController>/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            try
            {

                using (var dept = new PersonaleContext())
                {
                    var department = dept.Depts.Where(b => b.DepId == id).First();
                    dept.Depts.Remove(department);
                    dept.SaveChanges();
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
