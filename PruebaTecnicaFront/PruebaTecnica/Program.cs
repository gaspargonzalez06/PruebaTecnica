using PruebaTecnica.Config;
using PruebaTecnica.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var config  = builder.Configuration.GetSection(PlaceHolderConfig.SectionName).Get<PlaceHolderConfig>();

builder.Services.AddSingleton(config);
builder.Services.AddControllers();



// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpClient<IJsonHolderService, JsonPlaceHolderService>();

builder.Services.AddCors(options =>
{
options.AddPolicy(
    name: "AllowReactApp",
   policy =>
   {
       policy.WithOrigins("http://localhost:3001" , "http://localhost:3002")
             .AllowAnyHeader()
             .AllowAnyMethod();
   });
});


var app = builder.Build();
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
