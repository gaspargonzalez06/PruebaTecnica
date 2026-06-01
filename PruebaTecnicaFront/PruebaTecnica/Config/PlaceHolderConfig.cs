namespace PruebaTecnica.Config
{
    public class PlaceHolderConfig
    {
        public const string SectionName = "AllowedHost:ExternalApi";

        // Property names must match the keys in appsettings.json
        public string BaseUrl { get; set; } = string.Empty;

        public int Timeout { get; set; } = 30;

        public int RetryCount { get; set; } = 3;
    }
}
