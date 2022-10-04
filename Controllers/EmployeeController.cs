using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactProject.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        // GET: api/<EmployeeController>
        [HttpGet]
        public string Get()
        {
            using (var emp = new PersonaleContext())
            {
                var employee = emp.Emps.ToList();
                return JsonConvert.SerializeObject(employee);
            }

        }

        // GET api/<EmployeeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            using (var emp = new PersonaleContext())
            {
                var employeeNum = emp.Emps.Where(b => b.Empno == id).ToList();
                return JsonConvert.SerializeObject(employeeNum);

            }
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public string Post([FromForm] IFormCollection value)
        {
            try
            {
                using (var context = new PersonaleContext())
                {
                    var employee = new Emp();

                    employee.Empno = int.Parse(value["employeeNum"]);
                    employee.Ename = value["name"];
                    employee.Job = value["job"];
                    employee.Mgr = int.Parse(value["mgr"]);
                    employee.Hiredate = DateTime.Now;
                    employee.Sal = int.Parse(value["salary"]);
                    // employee.Comm = int.Parse(value["comm"]);
                    employee.Deptno = int.Parse(value["deptno"]);

                    context.Add(employee);
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

        // PUT api/<EmployeeController>/5
        [HttpPut("{id}")]
        public string Put(int id, [FromForm] IFormCollection value)

        {

            var empId = id;
            using (var context = new PersonaleContext())
            {
                try
                {
                    var employee = context.Emps.Where(b => b.Empno == empId).First();
                    employee.Empno = int.Parse(value["employeeNum"]);
                    employee.Ename = value["name"];
                    employee.Job = value["job"];
                    // employee.Hiredate = DateTime.Parse(value["hireDate"]);
                    employee.Mgr = int.Parse(value["mgr"]);
                    employee.Sal = int.Parse(value["salary"]);
                    employee.Comm = 0;
                    employee.Deptno = int.Parse(value["deptno"]);
                    context.SaveChanges();
                    return "1";

                }
                catch
                {
                    return "0";
                }


            }
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            try
            {
                using (var context = new PersonaleContext())
                {
                    var employee = context.Emps.Where(b => b.Empno == id).First();
                    context.Remove(employee);
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